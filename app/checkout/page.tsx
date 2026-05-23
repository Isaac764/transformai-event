"use client";

export default function CheckoutPage() {

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* RESUMO */}

        <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-10">

          <h1 className="text-5xl font-black mb-10">

            TRANSFORMAI

          </h1>

          <div className="space-y-6">

            <div className="flex justify-between">

              <span>Ingresso</span>

              <span>R$ 100,00</span>

            </div>

            <div className="flex justify-between">

              <span>Vagas restantes</span>

              <span className="text-yellow-500">
                150
              </span>

            </div>

          </div>

          <div className="border-t border-zinc-700 mt-10 pt-10">

            <div className="flex justify-between text-3xl font-black">

              <span>Total</span>

              <span className="text-green-500">
                R$ 100,00
              </span>

            </div>

          </div>

        </div>

        {/* PAGAMENTO */}

        <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-10">

          <h2 className="text-4xl font-black mb-10">

            PAGAMENTO

          </h2>

          <div className="space-y-5">

            <button className="w-full bg-black border border-green-500 rounded-2xl p-6 text-left">

              <h3 className="text-2xl font-black text-green-500">
                PIX
              </h3>

              <p className="text-gray-400 mt-2">
                Aprovação instantânea
              </p>

            </button>

            <button className="w-full bg-black border border-yellow-500 rounded-2xl p-6 text-left">

              <h3 className="text-2xl font-black text-yellow-500">
                CARTÃO DE CRÉDITO
              </h3>

              <p className="text-gray-400 mt-2">
                Parcelamento disponível
              </p>

            </button>

          </div>

          <button className="w-full mt-10 bg-green-500 hover:bg-green-400 transition py-5 rounded-2xl text-xl font-black">

            FINALIZAR PAGAMENTO

          </button>

        </div>

      </div>

    </main>
  );
}