import axios from "axios";

export async function POST(
  req: Request
) {

  const body = await req.json();

  await axios.post(

    process.env.GOOGLE_SCRIPT_URL!,

    body

  );

  return Response.json({
    success: true
  });

}