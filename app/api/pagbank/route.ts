import axios from "axios";
import { NextResponse } from "next/server";

interface Link {
  rel: string;
  href: string;
}

export async function POST(req: Request) {

  const body = await req.json();

  try {

    const response = await axios.post(
      "https://sandbox.api.pagseguro.com/checkouts",
      {
        reference_id: `TRANSFORMAI-${Date.now()}`,

        customer: {
          name: body.nome,
          email: body.email,
          tax_id: "12345678909",
          phones: [
            {
              country: "55",
              area: "98",
              number: body.whatsapp.replace(/\D/g, "")
            }
          ]
        },

        items: [
          {
            reference_id: "TRANSFORMAI",
            name: "Ingresso TRANSFORMAI",
            quantity: 1,
            unit_amount: 10000
          }
        ],

        payment_methods: [
          {
            type: "PIX"
          },
          {
            type: "CREDIT_CARD"
          }
        ],

        redirect_url: `${process.env.NEXT_PUBLIC_URL}/sucesso`,

        payment_notification_urls: [
          `${process.env.NEXT_PUBLIC_URL}/api/webhook`
        ]

      },

      {
        headers: {
          Authorization: `Bearer ${process.env.PAGBANK_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    // PEGAR URL DO PAGAMENTO

    const payLink = response.data.links.find((link: Link) => link.rel === "PAY");

    return NextResponse.json({
      checkout_url: payLink.href
    });

  } catch (error: unknown) {

    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);

      return NextResponse.json({
        error: true,
        details: error.response?.data
      });
    }

    console.log(error);

    return NextResponse.json({
      error: true,
      details: null
    });

  }

}