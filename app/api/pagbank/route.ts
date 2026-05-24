import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const response = await axios.post(

      "https://sandbox.api.pagseguro.com/checkouts",

      {

        reference_id:
          `TRANSFORMAI-${Date.now()}`,

        customer: {

          name: body.nome,

          email: body.email,

          tax_id: "23544302802",

          phones: [
            {
              country: "55",
              area: "98",
              number:
                body.whatsapp
                  .replace(/\D/g, "")
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
          `${process.env.NEXT_PUBLIC_URL}/sucesso`,

        payment_notification_urls: [
          `${process.env.NEXT_PUBLIC_URL}/api/webhook`
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

    console.log(response.data);

    // PEGAR LINK

    const payLink = response.data.links.find(
      (link: { rel: string; href: string }) => link.rel === "PAY"
    );

    return NextResponse.json({

      checkout_url:
        payLink?.href || null

    });

  } catch (error) {

    const axiosError = error instanceof axios.AxiosError ? error : null;

    console.log(
      "PAGBANK ERROR:",
      axiosError?.response?.data
    );

    return NextResponse.json({

      error: true,

      details:
        axiosError?.response?.data || (error instanceof Error ? error.message : "Unknown error")

    });

  }

}