import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const body = await req.json();

  await resend.emails.send({
    from: "TRANSFORMAI <contato@transformai.com>",
    to: body.email,
    subject: "Inscrição Confirmada",
    html: `
      <div style="font-family:Arial;background:#000;padding:40px;color:#fff">

        <h1 style="color:#facc15">
          TRANSFORMAI
        </h1>

        <p>Olá ${body.nome}</p>

        <p>
          Sua inscrição foi confirmada com sucesso.
        </p>

        <img
          src="https://seudominio.com/cartao-confirmacao.png"
          width="400"
        />

      </div>
    `
  });

  return Response.json({
    success: true
  });

}