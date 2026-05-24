"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function SucessoPage() {

  useEffect(() => {

    async function confirmarInscricao() {

      try {

        // PEGAR DADOS

        const data =
          localStorage.getItem(
            "transformai-user"
          );

        if (!data) return;

        const user =
          JSON.parse(data);

        // GOOGLE SHEETS

        await fetch(
          "/api/google-sheets",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify(user)
          }
        );

        // E-MAIL

        await fetch(
          "/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify(user)
          }
        );

        // LIMPAR STORAGE

        localStorage.removeItem(
          "transformai-user"
        );

      } catch (error) {

        console.log(error);

      }

    }

    confirmarInscricao();

  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* FUNDO */}

      <Image
        src="/images/fundo-transformai.png"
        alt="Fundo"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* CARD */}

      <div className="relative z-10 bg-black/90 border border-green-500/30 backdrop-blur-xl rounded-[40px] p-16 text-center max-w-2xl mx-6">

        <div className="text-8xl mb-8">

          ✅

        </div>

        <h1 className="text-6xl font-black text-green-500 leading-tight">

          INSCRIÇÃO
          <br />
          CONFIRMADA

        </h1>

        <p className="mt-8 text-2xl text-gray-300 leading-relaxed">

          Seu pagamento foi aprovado com sucesso.

        </p>

        <p className="mt-5 text-lg text-gray-400">

          Verifique seu e-mail para acessar
          seu cartão de confirmação.

        </p>

      </div>

    </main>
  );
}