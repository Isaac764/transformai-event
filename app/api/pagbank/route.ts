import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  // AQUI futuramente você conecta PagBank oficial

  return NextResponse.json({
    success: true,
    checkout_url: "/pagamento"
  });

}