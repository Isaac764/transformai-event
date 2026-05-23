"use client";

import { useState } from "react";
import Image from "next/image";

export default function PagamentoPage() {

  const [method, setMethod] = useState("pix");

  const pixCode =
    "00020126360014BR.GOV.BCB.PIX0114+5598999999995204000053039865406100.005802BR5925TRANSFORMAI6009SAOLUIS62070503***6304ABCD";

  function copyPixCode() {

    navigator.clipboard.writeText(pixCode);

    alert("Código PIX copiado!");

  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* RESUMO */}

        <div className="bg-zinc-900 border border-yellow-500/20 rounded-[40px] p-10">

          <h1 className="text-6xl font-black">

            TRANSFORMAI

          </h1>

          <div className="mt-16 space-y-10">

            <div className="flex justify-between text-xl">

              <span>Ingresso</span>

              <span>R$ 100,00</span>

            </div>

            <div className="flex justify-between text-xl">

              <span>Vagas restantes</span>

              <span className="text-yellow-500 font-bold">
                150
              </span>

            </div>

          </div>

          <div className="border-t border-zinc-700 mt-16 pt-10 flex justify-between items-center">

            <span className="text-5xl font-black">

              Total

            </span>

            <span className="text-5xl font-black text-green-500">

              R$ 100,00

            </span>

          </div>

        </div>

        {/* PAGAMENTO */}

        <div className="bg-zinc-900 border border-yellow-500/20 rounded-[40px] p-10">

          <h2 className="text-6xl font-black mb-10">

            PAGAMENTO

          </h2>

          {/* MÉTODOS */}

          <div className="space-y-5">

            {/* PIX */}

            <div
              onClick={() => setMethod("pix")}
              className={`
              cursor-pointer
              w-full
              p-8
              rounded-3xl
              border
              text-left
              transition-all
              duration-300
              ${
                method === "pix"
                  ? "border-green-500 bg-green-500/10"
                  : "border-zinc-700 bg-black"
              }
              `}
            >

              <h3 className="text-4xl font-black text-green-500">

                PIX

              </h3>

              <p className="mt-2 text-gray-400 text-lg">

                Aprovação instantânea

              </p>

            </div>

            {/* CARTÃO */}

            <div
              onClick={() => setMethod("card")}
              className={`
              cursor-pointer
              w-full
              p-8
              rounded-3xl
              border
              text-left
              transition-all
              duration-300
              ${
                method === "card"
                  ? "border-yellow-500 bg-yellow-500/10"
                  : "border-zinc-700 bg-black"
              }
              `}
            >

              <h3 className="text-4xl font-black text-yellow-500">

                CARTÃO DE CRÉDITO

              </h3>

              <p className="mt-2 text-gray-400 text-lg">

                Parcelamento disponível

              </p>

            </div>

          </div>

          {/* CONTEÚDO DINÂMICO */}

          <div className="mt-10">

            {/* PIX */}

            <div className="mt-10">

              {method === "pix" ? (

                <div>

                  <div className="bg-white rounded-3xl p-6 w-fit mx-auto">

                    <Image
                      src="/images/qrcode-pix.png"
                      alt="QR Code PIX"
                      width={280}
                      height={280}
                    />

                  </div>

                  <div className="bg-black border border-zinc-700 rounded-2xl p-5 mt-8 text-sm break-all">

                    {pixCode}

                  </div>

                  <button
                    onClick={copyPixCode}
                    className="w-full mt-6 bg-green-500 hover:bg-green-400 transition py-5 rounded-2xl text-xl font-black"
                  >

                    COPIAR CÓDIGO PIX

                  </button>

                </div>

              ) : (

                <div className="space-y-5">

                  <input
                    placeholder="Número do cartão"
                    className="w-full bg-black border border-zinc-700 rounded-2xl p-5 text-lg"
                  />

                  <input
                    placeholder="Nome no cartão"
                    className="w-full bg-black border border-zinc-700 rounded-2xl p-5 text-lg"
                  />

                  <div className="grid grid-cols-2 gap-5">

                    <input
                      placeholder="MM/AA"
                      className="w-full bg-black border border-zinc-700 rounded-2xl p-5 text-lg"
                    />

                    <input
                      placeholder="CVV"
                      className="w-full bg-black border border-zinc-700 rounded-2xl p-5 text-lg"
                    />

                  </div>

                </div>

              )}

            </div>

            {/* BOTÃO */}

            <button
              onClick={() =>
                window.location.href = "/sucesso"
              }
              className="w-full mt-10 bg-green-500 hover:bg-green-400 transition py-6 rounded-2xl text-2xl font-black"
            >

              FINALIZAR PAGAMENTO

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}