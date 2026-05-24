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

        checkout_settings: {

          success_url:
            `${process.env.NEXT_PUBLIC_URL}/sucesso`,

          payment_methods: [
            {
              type: "PIX"
            },
            {
              type: "CREDIT_CARD"
            }
          ]

        }

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

    const paymentLink =
      response.data.links?.find(
        (link: { rel?: string; href?: string }) =>
          link.rel === "PAY"
      );

    return NextResponse.json({

      checkout_url:
        paymentLink?.href || null

    });

  } catch (error: unknown) {

    const err = error as {
      response?: { data?: unknown };
      message?: string;
    };

    const details = err.response?.data ?? (err.message ?? String(error));

    console.log("PAGBANK ERROR:", details);

    return NextResponse.json({ error: true, details });

  }

}