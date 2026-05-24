import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const cleanPhone =
      body.whatsapp.replace(/\D/g, "");

    const response = await axios.post(

      "https://sandbox.api.pagseguro.com/orders",

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
              number: cleanPhone.slice(2),
              type: "MOBILE"
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

        qr_codes: [
          {
            amount: {
              value: 10000
            }
          }
        ],

        charges: [
          {
            reference_id:
              "TRANSFORMAI-CHARGE",

            description:
              "Ingresso TRANSFORMAI",

            amount: {
              value: 10000,
              currency: "BRL"
            },

            payment_method: {
              type: "PIX"
            }
          }
        ]

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

    // QR CODE PIX

    const qrCode =
      response.data.qr_codes?.[0];

    // LINK PAGAMENTO

    const paymentLink =
      qrCode?.links?.find(
        (link: { rel: string; href: string }) =>
          link.rel === "PAY"
      );

    return NextResponse.json({

      checkout_url:
        paymentLink?.href ||

        qrCode?.links?.[0]?.href ||

        null

    });

  } catch (error: unknown) {

    const errorDetails = axios.isAxiosError(error)
      ? error.response?.data || error.message
      : error instanceof Error
      ? error.message
      : String(error);

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