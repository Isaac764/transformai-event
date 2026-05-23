"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center">

        {/* FUNDO */}
        <div className="absolute inset-0 z-0">

          <Image
            src="/images/bg.png"
            alt="Fundo Transformai"
            fill
            priority
            className="object-cover opacity-50"
          />

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Glow dourado */}
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-yellow-500/10 blur-[180px] rounded-full" />

        </div>

        {/* CONTEÚDO */}
        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 items-center gap-10">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >

            {/* BADGE */}
            <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-black text-sm mb-8 shadow-2xl">

              16 DE MAIO • 07:30H • PRAIA MAR HOTEL

            </div>

            {/* TÍTULO */}
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">

              TRANSFORMAI

            </h1>

            {/* SUBTÍTULO */}
            <h2 className="text-3xl md:text-5xl mt-4 font-light leading-tight">

              A MENTALIDADE DO REINO NOS NEGÓCIOS

            </h2>

            {/* TEXTO */}
            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-xl">

              O maior evento para empresários e empreendedores
              cristãos que desejam prosperar com propósito.

            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-105 px-10 py-5 rounded-2xl text-lg font-black shadow-2xl">

                QUERO GARANTIR MINHA VAGA

              </button>

              <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 px-10 py-5 rounded-2xl text-lg font-bold">

                VER PROGRAMAÇÃO

              </button>

            </div>

          </motion.div>

          {/* IMAGEM DAS PESSOAS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* Glow atrás */}
            <div className="absolute w-[700px] h-[700px] bg-yellow-500/30 blur-[180px] rounded-full" />

            <Image
              src="/images/speakers.png"
              alt="Palestrantes"
              width={1200}
              height={1200}
              priority
              className="
              relative z-10
              object-contain
              scale-125
              drop-shadow-[0_40px_40px_rgba(0,0,0,0.95)]
              "
            />

          </motion.div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="relative py-24 bg-black">

        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Mentalidade de Reino",
              "Networking Estratégico",
              "Empreendedorismo",
              "Propósito e Liderança",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">

                  <div className="w-8 h-8 rounded-full bg-yellow-500" />

                </div>

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-[#050505]">

        <div className="container mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-20">

            COMO FUNCIONA SUA INSCRIÇÃO

          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Faça sua inscrição",
              "Escolha PIX ou Cartão",
              "Pagamento aprovado",
              "Receba confirmação no e-mail",
            ].map((step, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-yellow-500/10 rounded-3xl p-10 text-center hover:border-yellow-500 transition-all duration-300"
              >

                <div className="w-20 h-20 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black">

                  {index + 1}

                </div>

                <h3 className="text-2xl font-bold leading-snug">

                  {step}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent blur-3xl" />

        <div className="relative container mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-7xl font-black leading-tight">

            GARANTA SUA VAGA AGORA

          </h2>

          <p className="mt-6 text-xl text-gray-300">

            Vagas limitadas para o maior evento de empresários cristãos.

          </p>

          <button className="mt-10 bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-105 px-12 py-6 rounded-2xl text-2xl font-black shadow-[0_0_50px_rgba(34,197,94,0.4)]">

            FAZER INSCRIÇÃO

          </button>

        </div>

      </section>

    </main>
  );
}