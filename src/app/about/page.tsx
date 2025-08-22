"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div
      className="flex flex-col md:flex-row p-1"
      style={{ minHeight: "calc(100vh - 60px)" }} // Minus the NavBar
    >
      {/* Left Side: Photo + Intro */}
      <div className="md:w-1/3 bg-gray-950 flex flex-col items-center justify-center p-8 md:rounded-3xl md:rounded-3xl shadow-lg border border-gray-800">
        <div className="mb-6">
          <Image
            src="/" // /public/img
            alt="Imagen de Perfil"
            width={120}
            height={120}
            className="rounded-full border-4 border-sky-500 shadow-md"
          />
        </div>
        <h1 className="text-2xl font-bold text-sky-950">J. Ortiz</h1>
        <p className="text-gray-700 text-center">
          Hello World! - Estudiante de informática y creador de este blog. Mi
          objetivo es documentar mi aprendizaje y compartir proyectos y recursos
          que me han ayudado en mi trayectoria.
        </p>
        <h2 className="text-xl text-sky-950">¿Qué es esto?</h2>
        <p className="text-gray-700 text-sm text-center">
          El sistemas de carpetas de Windows me parece aburrido, Mac es muy caro
          y no tengo tiempo para lidiar con los errores en cualquier distro de
          Linux. Por este motivo he decidido crear esto. En un principio quería
          hacerlo solo para documentar mis notas, pero pensando en que puede
          servir a otra persona he decidido hacerlo online.
        </p>
      </div>

      {/* Right Side: Work + Studies */}
      <div className="md:w-2/3 flex flex-col justify-start p-8 space-y-8">
        {/* Work Section */}
        <div>
          <h2 className="text-2xl font-bold text-sky-800 mb-3">Trabajo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-950 p-4 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-lg font-semibold mb-1">
                <a
                  href="https://yellow-time.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline transition-colors"
                >
                  YellowTime
                </a>
              </h3>
              <p className="text-gray-500 mb-2">Full Stack Developer | 11/24 - Actualidad</p>

              <h4 className="font-semibold text-gray-700 mb-2">Tecnologías</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Spring Framework & Angular + React</li>
                <li>MySQL + AWS Clouding (S3 Buckets)</li>
                <li>Prácticas CI/CD</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-950 p-4 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-lg font-semibold mb-1">
                TuFODMAP -{" "}
                <a
                  href="https://www.aircury.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline transition-colors"
                >
                  Aircury
                </a>
              </h3>
              <p className="text-gray-500 mb-2">
                Ganador{" "}
                <a
                  href="https://granadev.es/summer-of-code.html?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline transition-colors"
                >
                  Summer of Code
                </a>{" "}
                Internship | 06/24 - 09/24
              </p>

              <h4 className="font-semibold text-gray-700 mb-2">Tecnologías</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Spring Framework & React</li>
                <li>MySQL</li>
                <li>Render | Railway | Vercel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Studies Section */}
        <div>
          <h2 className="text-2xl font-bold text-sky-800 mb-3">Educación</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-950 p-4 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-lg font-semibold">
                Grado Ingeniería Informática
              </h3>
              <p className="text-gray-500">Universidad Internacional de Valencia</p>
              <p className="text-gray-500"> 2025 - 2028</p>

              <h4 className="font-semibold text-gray-700 mb-2">Competencias</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>...</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-950 p-4 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-lg font-semibold ">
                Desarrollo de Aplicaciones Web - CFGS
              </h3>
              <p className="text-gray-500">IES Franciso Ayala, Granada.</p>
              <p className="text-gray-500"> 2023 - 2025</p>

              <h4 className="font-semibold text-gray-700 mb-2">Competencias</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Desarrollo Full Stack</li>
                <li>Base de Datos</li>
                <li>Entornos de Desarrollos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
