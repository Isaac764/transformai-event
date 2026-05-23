export default function Flow() {

  const steps = [
    "Faça sua inscrição",
    "Escolha PIX ou Cartão",
    "Pagamento aprovado",
    "Receba confirmação"
  ];

  return (
    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center text-white mb-20">

          COMO FUNCIONA

        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 text-center"
            >

              <div className="w-16 h-16 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-6 text-2xl">

                {index + 1}

              </div>

              <h3 className="text-white text-xl font-bold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}