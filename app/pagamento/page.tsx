"use client";

import { useState } from "react";

export default function PagamentoPage() {

  const [loading, setLoading] = useState(false);

  async function handlePayment() {

    setLoading(true);

    try {

      // PEGAR DADOS

      const formData =
        localStorage.getItem("transformai-user");

      if (!formData) {

        alert("Dados não encontrados.");

        setLoading(false);

        return;

      }

      // CHAMAR API

      const response = await fetch("/api/pagbank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      // REDIRECIONAR PAGBANK

      if (data.checkout_url) {

        window.location.href =
          data.checkout_url;

      } else {

        alert("Erro ao gerar pagamento.");

      }

    } catch (error) {

      console.log(error);

      alert("Erro ao processar pagamento.");

    }

    setLoading(false);

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

        <div className="bg-zinc-900 border border-yellow-500/20 rounded-[40px] p-10 flex flex-col justify-between">

          <div>

            <h2 className="text-6xl font-black">

              PAGAMENTO

            </h2>

            <p className="mt-8 text-xl text-gray-400 leading-relaxed">

              Você será redirecionado para o ambiente
              seguro do PagBank para escolher:

            </p>

            <div className="mt-10 space-y-5">

              {/* PIX */}

              <div className="bg-black border border-green-500 rounded-3xl p-8">

                <h3 className="text-4xl font-black text-green-500">

                  PIX

                </h3>

                <p className="mt-2 text-gray-400">

                  QR Code e código copia e cola

                </p>

              </div>

              {/* CARTÃO */}

              <div className="bg-black border border-yellow-500 rounded-3xl p-8">

                <h3 className="text-4xl font-black text-yellow-500">

                  CARTÃO

                </h3>

                <p className="mt-2 text-gray-400">

                  Crédito e débito

                </p>

              </div>

            </div>

          </div>

          {/* BOTÃO */}

          <button
            type="button"
            onClick={handlePayment}
            disabled={loading}
            className="
            w-full
            mt-10
            bg-green-500
            hover:bg-green-400
            disabled:opacity-50
            transition
            py-6
            rounded-2xl
            text-2xl
            font-black
            "
          >

            {loading
              ? "PROCESSANDO..."
              : "IR PARA PAGAMENTO"}

          </button>

        </div>

      </div>

    </main>
  );
}