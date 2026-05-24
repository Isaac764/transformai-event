import axios from "axios";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const response = await axios.post(

      "https://api.pagseguro.com/orders",

      {

        reference_id:
          `TRANSFORMAI-${Date.now()}`,

        customer: {

          name:
            body.nome,

          email:
            body.email,

          tax_id:
            "12345678909",

          phones: [
            {
              country: "55",
              area:
                body.whatsapp
                  .replace(/\D/g, "")
                  .slice(0, 2),

              number:
                body.whatsapp
                  .replace(/\D/g, "")
                  .slice(2)
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

        notification_urls: [

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

    const data = response.data;

    return NextResponse.json({

      checkout_url:

        data.links?.find(
          (
            link:{
            rel: string;
            href: string;
            }    
          )=>

            link.rel === "PAY" ||
            link.href === "AUTHENTICATE"
        
        )?.href || null,
            
        qr_code:

        data.qr_codes?.[0]?.links?.[0]?.href || null

    });

  } catch (error: unknown) {

  if (axios.isAxiosError(error)) {

    console.error(
      "PAGBANK ERROR",
      error.response?.data
    );

    return NextResponse.json({

      error: true,

      details:
        error.response?.data ||
        error.message

    }, {

      status:
        error.response?.status || 500

    });

  }

  console.error(error);

  return NextResponse.json({

    error: true,

    details:
      "Erro interno"

  }, {

    status: 500

    });
     }
}  
