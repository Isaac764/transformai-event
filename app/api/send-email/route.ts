import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: Request
) {

  const body = await req.json();

  await resend.emails.send({

    from:
      "onboarding@resend.dev",

    to:
      body.email,

    subject:
      "Inscrição Confirmada",

    html: `

      <div style="
        background:#000;
        padding:40px;
        color:#fff;
        font-family:Arial;
      ">

        <h1 style="
          color:#facc15;
          font-size:42px;
        ">
          TRANSFORMAI
        </h1>

        <p>Olá ${body.nome}</p>

        <p>
          Sua inscrição foi confirmada
          com sucesso.
        </p>

        <p>
          Nos vemos no evento.
        </p>

        <img
          src="${process.env.NEXT_PUBLIC_URL}/images/cartao-confirmacao.png"
          width="400"
        />

      </div>

    `

  });

  return Response.json({
    success: true
  });

}