"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {useRef, useState} from "react";

import {
  FaBrain,
  FaHandshake,
  FaLightbulb,
  FaBullseye
} from "react-icons/fa";

export default function Home() {

  const formRef = useRef<HTMLDivElement>(null);

const [form, setForm] = useState({
  nome: "",
  email: "",
  whatsapp: ""
});

function scrollToForm() {
  formRef.current?.scrollIntoView({
    behavior: "smooth"
  });
}

async function handleSubmit() {

  if (
    !form.nome ||
    !form.email ||
    !form.whatsapp
  ) {
    alert("Preencha todos os campos.");
    return;
  }

  try {

    const response = await fetch(
      "/api/pagbank",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    console.log(data);

    // REDIRECIONAR

    if (data.checkout_url) {

      window.location.href =
        data.checkout_url;

    } else {

      alert(
        "Erro ao gerar pagamento."
      );

    }

  } catch (error) {

    console.log(error);

    alert(
      "Erro ao processar pagamento."
    );

  }

}

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden">

        {/* FUNDO */}

        <div className="absolute inset-0 z-0">

          <Image
            src="/images/fundo-transformai.png"
            alt="Fundo"
            fill
            priority
            className="object-cover opacity-100"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/20" />

          {/* GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        </div>

        {/* NAVBAR */}

        <header className="relative z-30">

          <div className="container mx-auto px-6 py-6 flex items-center justify-between">

            {/* LOGO */}

            <div className="flex items-center gap-4">

              <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={50}
              />

              <div>

                <h1 className="font-black text-2xl lg:text-3xl">
                  TRANSFORMAI
                </h1>

                <p className="text-yellow-500 text-sm">
                  A Mentalidade do Reino nos Negócios
                </p>

              </div>

            </div>

            {/* MENU */}

            <nav className="hidden lg:flex items-center gap-10 font-semibold text-sm">

              <a href="#">O EVENTO</a>
              <a href="#">PALESTRANTES</a>
              <a href="#">PROGRAMAÇÃO</a>
              <a href="#">DEPOIMENTOS</a>
              <a href="#">CONTATO</a>

            </nav>

            {/* BOTÃO */}

            <button className="hidden lg:block bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-xl font-black">

              GARANTIR MINHA VAGA

            </button>

          </div>

        </header>

        {/* CONTEÚDO HERO */}

        <div className="relative z-20 container mx-auto px-6 pt-10 lg:pt-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* ESQUERDA */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              {/* BADGE */}

              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-black text-sm mb-8">

                16 DE MAIO • 07:30H • PRAIA MAR HOTEL, SÃO LUÍS - MA

              </div>

              {/* TÍTULO */}

              <h1 className="text-6xl md:text-7xl lg:text-[110px] font-black leading-none">

                TRANSFORMAI

              </h1>

              {/* SUB */}

              <h2 className="text-3xl md:text-5xl mt-5 font-light leading-tight max-w-3xl">

                A MENTALIDADE DO REINO NOS NEGÓCIOS

              </h2>

              {/* TEXTO */}

              <p className="mt-8 text-xl text-gray-300 max-w-xl leading-relaxed">

                O maior evento para empresários e empreendedores
                cristãos que desejam prosperar com propósito e impacto.

              </p>

              {/* BENEFÍCIOS */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                {/* ITEM */}

                <div className="text-center">

                  <div className="w-20 h-20 rounded-full border border-yellow-500 flex items-center justify-center mx-auto mb-5">

                    <FaLightbulb className="text-yellow-500 text-3xl" />

                  </div>

                  <p className="font-bold text-sm leading-relaxed">

                    ENSINOS
                    <br />
                    PRÁTICOS

                  </p>

                </div>

                {/* ITEM */}

                <div className="text-center">

                  <div className="w-20 h-20 rounded-full border border-yellow-500 flex items-center justify-center mx-auto mb-5">

                    <FaHandshake className="text-yellow-500 text-3xl" />

                  </div>

                  <p className="font-bold text-sm leading-relaxed">

                    NETWORKING
                    <br />
                    ESTRATÉGICO

                  </p>

                </div>

                {/* ITEM */}

                <div className="text-center">

                  <div className="w-20 h-20 rounded-full border border-yellow-500 flex items-center justify-center mx-auto mb-5">

                    <FaBrain className="text-yellow-500 text-3xl" />

                  </div>

                  <p className="font-bold text-sm leading-relaxed">

                    MENTALIDADE
                    <br />
                    DE REINO

                  </p>

                </div>

                {/* ITEM */}

                <div className="text-center">

                  <div className="w-20 h-20 rounded-full border border-yellow-500 flex items-center justify-center mx-auto mb-5">

                    <FaBullseye className="text-yellow-500 text-3xl" />

                  </div>

                  <p className="font-bold text-sm leading-relaxed">

                    PROPÓSITO
                    <br />
                    E IMPACTO

                  </p>

                </div>

              </div>

            </motion.div>

            {/* DIREITA */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center"
            >

              {/* SOMBRA */}

              <div className="absolute bottom-0 w-[80%] h-24 bg-black blur-3xl rounded-full z-0" />

              {/* GLOW */}

              <div className="absolute inset-0 bg-yellow-500/20 blur-[150px]" />

              {/* PESSOAS */}

              <Image
                src="/images/pessoas.png"
                alt="Pessoas"
                width={1200}
                height={1200}
                priority
                className="
                relative z-20
                object-contain
                scale-125
                lg:scale-[1.55]
                max-w-[450px]
                md:max-w-[650px]
                lg:max-w-[1000px]
                mx-auto
                drop-shadow-[0_40px_40px_rgba(0,0,0,0.95)]
                mt-10
                "
              />

            </motion.div>

          </div>

        </div>

      </section>

      {/* COMO FUNCIONA */}

<section className="py-20 bg-black border-t border-yellow-500/10 overflow-hidden">

  <div className="container mx-auto px-4 lg:px-6">

    {/* TÍTULO */}

    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center leading-tight mb-16">

      COMO FUNCIONA SUA
      <br />
      INSCRIÇÃO

    </h2>

    {/* MOBILE SCROLL */}

    <div className="lg:hidden overflow-x-auto pb-6">

      <div className="flex gap-5 min-w-max px-1">

        {[
          {
            number: "1",
            title: "FAÇA SUA INSCRIÇÃO",
            desc: "Preencha seus dados na página inicial"
          },
          {
            number: "2",
            title: "REALIZE O PAGAMENTO",
            desc: "Escolha PIX ou Cartão"
          },
          {
            number: "3",
            title: "CONFIRMAÇÃO",
            desc: "Pagamento aprovado automaticamente"
          },
          {
            number: "4",
            title: "RECEBA NO E-MAIL",
            desc: "Você receberá seu cartão de confirmação"
          }
        ].map((item, index) => (

          <div
            key={index}
            className="
            min-w-[260px]
            bg-zinc-900
            border
            border-yellow-500/20
            rounded-[35px]
            p-8
            flex
            flex-col
            items-center
            text-center
            "
          >

            {/* NÚMERO */}

            <div className="w-20 h-20 rounded-full border border-yellow-500 flex items-center justify-center mb-8 text-3xl font-black text-yellow-500">

              {item.number}

            </div>

            {/* TÍTULO */}

            <h3 className="text-3xl font-black leading-tight">

              {item.title}

            </h3>

            {/* DESC */}

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">

              {item.desc}

            </p>

          </div>

        ))}

      </div>

    </div>

    {/* DESKTOP */}

    <div className="hidden lg:grid grid-cols-4 gap-8">

      {[
        {
          number: "1",
          title: "FAÇA SUA INSCRIÇÃO",
          desc: "Preencha seus dados na página inicial"
        },
        {
          number: "2",
          title: "REALIZE O PAGAMENTO",
          desc: "Escolha PIX ou Cartão"
        },
        {
          number: "3",
          title: "CONFIRMAÇÃO",
          desc: "Pagamento aprovado automaticamente"
        },
        {
          number: "4",
          title: "RECEBA NO E-MAIL",
          desc: "Você receberá seu cartão de confirmação"
        }
      ].map((item, index) => (

        <div
          key={index}
          className="
          bg-zinc-900
          border
          border-yellow-500/20
          rounded-[35px]
          p-10
          text-center
          hover:border-yellow-500
          transition-all
          duration-300
          "
        >

          {/* NÚMERO */}

          <div className="w-24 h-24 rounded-full border border-yellow-500 flex items-center justify-center mx-auto mb-10 text-4xl font-black text-yellow-500">

            {item.number}

          </div>

          {/* TÍTULO */}

          <h3 className="text-3xl font-black leading-tight min-h-[120px]">

            {item.title}

          </h3>

          {/* DESC */}

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* FORMULÁRIO ABAIXO */}

      <section ref={formRef} className="relative py-24 bg-black border-t border-yellow-500/10">

        <div className="container mx-auto px-6">

          <div className="max-w-3xl mx-auto bg-zinc-900/90 backdrop-blur-xl border border-yellow-500/20 rounded-[40px] p-10 lg:p-16">

            <h2 className="text-5xl font-black text-center">

              GARANTA SUA VAGA

            </h2>

            <p className="text-center text-gray-400 mt-5 mb-12 text-lg">

              Preencha seus dados para participar do evento

            </p>

            <div className="grid grid-cols-1 gap-6">

              <input
              placeholder="Nome completo"
              className="w-full bg-black border border-zinc-700 rounded-2xl p-6 text-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  nome: e.target.value
                })
              }
            />

              <input
              placeholder="E-mail"
              className="w-full bg-black border border-zinc-700 rounded-2xl p-6 text-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
            />

              <input
              placeholder="WhatsApp (DDD + número)"
              className="w-full bg-black border border-zinc-700 rounded-2xl p-6 text-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  whatsapp: e.target.value
                })
              }
            />

            </div>

            <button
            type="button"
              onClick={handleSubmit}
              disabled={
                !form.nome ||
                !form.email ||
                !form.whatsapp
              }
              className="
              w-full
              mt-10
              bg-green-500
              hover:bg-green-400
              disabled:bg-zinc-700
              disabled:opacity-50
              disabled:cursor-not-allowed
              transition-all
              duration-300
              py-6
              rounded-2xl
              text-2xl
              font-black
              "
            >

              GARANTIR MINHA VAGA

            </button>

            <p className="text-center text-sm text-gray-500 mt-6">

              🔒 Seus dados estão 100% seguros

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}