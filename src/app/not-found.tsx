import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-center px-4 lg: mt-3 mt-10 ">
      <h1 className="text-3xl md:text-4xl font-bold text-[#00D3F3] mb-6 animate-bounce">
        ¿¡Dónde están los apuntes!?
      </h1>

      <Image
        src="/img/404.png"
        alt="Error 404"
        width={250}
        height={250}
        className="rounded-xl border-2 border-[#00D3F3] shadow-lg shadow-[#007595]/50 mb-6"
        priority
      />

      <p className="text-lg text-gray-300">
        Relájate — solo es un error <span className="text-[#00D3F3]">404</span>.{" "}
        <a
          href="/"
          className="text-[#00D3F3] hover:text-[#007595] underline underline-offset-4 transition-colors"
        >
          Vuelve a la página principal
        </a>
        .
      </p>
    </div>
  );
}
