import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const cleanPhone =
      body.whatsapp.replace(/\D/g, "");

    const response = await axios.post(

      "https://sandbox.api.pagseguro.com/checkouts",

      {

        reference_id:
          `TRANSFORMAI-${Date.now()}`,

        customer: {

          name: body.nome,

          email: body.email,

          tax_id: "54549013006",

          phones: [
            {
              country: "55",
              area: cleanPhone.slice(0, 2),
              number: cleanPhone.slice(2)
            }
          ]

        },

        items: [
          {
            reference_id:
              "TRANSFORMAI",

            name:
              "Ingresso TRANSFORMAI",

            quantity: 1,

            unit_amount: 10000
          }
        ],

        redirect_url:
          `${process.env.NEXT_PUBLIC_URL}/sucesso`

      },

      {

        headers: {

          Authorization:
            `Bearer ${process.env.PAGBANK_TOKEN}`,

          "Content-Type":
            "application/json"

        }

      }

    );

    console.log(
      "PAGBANK RESPONSE:",
      response.data
    );

    // LOCALIZAR LINK

    const payLink =
      response.data.links?.find(
        (link: { rel: string; href: string }) =>
          link.rel === "PAY" ||
          link.rel === "CHECKOUT" ||
          link.rel === "PAYMENT"
      );

    console.log("PAY LINK:", payLink);

    return NextResponse.json({

      checkout_url:
        payLink?.href || null

    });

  } catch (error) {

    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorDetails = error instanceof axios.AxiosError ? error.response?.data : errorMessage;

    console.log(
      "PAGBANK ERROR:",
      errorDetails
    );

    return NextResponse.json({

      error: true,

      details: errorDetails

    });

  }

}