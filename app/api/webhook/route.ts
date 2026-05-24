import axios from "axios";

export async function POST(req: Request) {

  const body = await req.json();

  console.log(body);

  // PAGAMENTO APROVADO

  if (
    body.charges?.[0]?.status === "PAID"
  ) {

    // GOOGLE SHEETS

    await axios.post(
      process.env.GOOGLE_SCRIPT_URL!,
      {
        nome:
          body.customer.name,

        email:
          body.customer.email,

        whatsapp:
          body.customer.phones?.[0]?.number
      }
    );

    // EMAIL

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
            body.customer.name,

          email:
            body.customer.email
        })
      }
    );

  }

  return Response.json({
    success: true
  });

}