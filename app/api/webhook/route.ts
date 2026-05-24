import axios from "axios";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log(
      "WEBHOOK:",
      body
    );

    // PAGAMENTO APROVADO

    const charge =
      body.charges?.[0];

    if (
      charge?.status === "PAID"
    ) {

      const customer =
        body.customer;

      // GOOGLE SHEETS

      await axios.post(

        process.env.GOOGLE_SCRIPT_URL!,

        {

          nome:
            customer.name,

          email:
            customer.email,

          whatsapp:
            customer.phones?.[0]?.number

        }

      );

      // ENVIAR EMAIL

      await fetch(

        `${process.env.NEXT_PUBLIC_URL}/api/send-email`,

        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            nome:
              customer.name,

            email:
              customer.email

          })

        }

      );

    }

    return Response.json({
      success: true
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false
    });

  }

}