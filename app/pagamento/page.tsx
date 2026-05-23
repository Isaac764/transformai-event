"use client";

import Image from "next/image";
import { useState } from "react";

export default function PagamentoPage() {

  const [method, setMethod] = useState("pix");

  const pixCode =
    "00020126360014BR.GOV.BCB.PIX0114+5598999999995204000053039865406100.005802BR5925TRANSFORMAI EVENTO6009SAOLUIS62070503***6304ABCD";

  function copyPix() {

    navigator.clipboard.writeText(pixCode);

    alert("Código PIX copiado!");

  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ESQUERDA */}

        <div className="bg-zinc-900 border border-yellow-500/20 rounded-[40px] p-10">

          <h1 className="text-5xl font-black mb-10">

            PAGAMENTO

          </h1>

          {/* MÉTODOS */}

          <div className="flex gap-5 mb-10">

            <button
              onClick={() => setMethod("pix")}
              className={`flex-1 py-5 rounded-2xl font-black transition ${
                method === "pix"
                  ? "bg-green-500 text-black"
                  : "bg-zinc-800"
              }`}
            >

              PIX

            </button>

            <button
              onClick={() => setMethod("card")}
              className={`flex-1 py-5 rounded-2xl font-black transition ${
                method === "card"
                  ? "bg-yellow-500 text-black"
                  : "bg-zinc-800"
              }`}
            >

              CARTÃO

            </button>

          </div>

          {/* PIX */}

          {method === "pix" && (

            <div>

              <div className="bg-white p-6 rounded-3xl w-fit mx-auto">

                <Image
                  src="/images/qrcode-pix.png"
                  alt="QR Code"
                  width={300}
                  height={300}
                />

              </div>

              <div className="bg-black border border-zinc-700 rounded-2xl p-5 mt-8 break-all text-sm">

                {pixCode}

              </div>

              <button
                onClick={copyPix}
                className="w-full mt-6 bg-green-500 hover:bg-green-400 transition py-5 rounded-2xl text-xl font-black"
              >

                COPIAR CÓDIGO PIX

              </button>

            </div>

          )}

          {/* CARTÃO */}

          {method === "card" && (

            <div className="space-y-5">

              <input
                placeholder="Número do cartão"
                className="w-full bg-black border border-zinc-700 rounded-2xl p-5"
              />

              <input
                placeholder="Nome no cartão"
                className="w-full bg-black border border-zinc-700 rounded-2xl p-5"
              />

              <div className="grid grid-cols-2 gap-5">

                <input
                  placeholder="MM/AA"
                  className="w-full bg-black border border-zinc-700 rounded-2xl p-5"
                />

                <input
                  placeholder="CVV"
                  className="w-full bg-black border border-zinc-700 rounded-2xl p-5"
                />

              </div>

              <button
                className="w-full bg-yellow-500 hover:bg-yellow-400 transition py-5 rounded-2xl text-xl font-black text-black"
              >

                PAGAR AGORA

              </button>

            </div>

          )}

        </div>

        {/* DIREITA */}

        <div className="bg-zinc-900 border border-yellow-500/20 rounded-[40px] p-10 flex flex-col justify-between">

          <div>

            <h2 className="text-4xl font-black">

              RESUMO

            </h2>

            <div className="mt-10 space-y-5">

              <div className="flex justify-between text-xl">

                <span>Ingresso TRANSFORMAI</span>

                <span>R$ 100,00</span>

              </div>

            </div>

          </div>

          <div>

            <div className="border-t border-zinc-700 pt-6 flex justify-between text-3xl font-black">

              <span>Total</span>

              <span className="text-green-500">

                R$ 100,00

              </span>

            </div>

            <button
              onClick={() =>
                window.location.href = "/sucesso"
              }
              className="w-full mt-10 bg-green-500 hover:bg-green-400 transition py-6 rounded-2xl text-2xl font-black"
            >

              SIMULAR PAGAMENTO APROVADO

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}