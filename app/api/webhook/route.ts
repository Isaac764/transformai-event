import axios from "axios";

export async function POST(req: Request) {

  const body = await req.json();

  // SALVAR NO SHEETS

  await axios.post(process.env.GOOGLE_SCRIPT_URL!, {
    nome: body.nome,
    email: body.email,
    whatsapp: body.whatsapp
  });

  // ENVIAR EMAIL

  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return Response.json({
    success: true
  });

}