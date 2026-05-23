import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="TRANSFORMAI logo"
            width={48}
            height={48}
            className="w-12"
          />

          <div>
            <h1 className="font-black text-white">
              TRANSFORMAI
            </h1>

            <p className="text-xs text-yellow-500">
              A Mentalidade do Reino
            </p>
          </div>

        </div>

        <button className="bg-green-600 hover:bg-green-500 transition px-6 py-3 rounded-xl font-bold">
          GARANTIR VAGA
        </button>

      </div>

    </header>
  );
}