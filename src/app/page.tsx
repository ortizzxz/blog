import BlogList from "./components/BlogList";
import { getAllCategories, getPostsByCategory } from "./lib/getPosts";

export default function Home() {
  const categories = getAllCategories();
  const posts = categories.flatMap((cat) => getPostsByCategory(cat));

  return (
    <main className="min-h-screen bg-black text-gray-200 px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Left side - About / Motivation */}
        <section className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00D3F3]">
            ¿Qué es esto?
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Bienvenido a mi archivador (?). Aquí comparto mis apuntes, reflexiones y
            aprendizajes mientras estudio{" "}
            <span className="text-[#00D3F3] font-medium">
              Ingeniería Informática
            </span>.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Decidí abrir este espacio porque quería organizar mis notas, tener
            un lugar donde guardar lo que aprendo y, de paso, ayudar a quien
            esté estudiando lo mismo.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Si te interesa la programación, la tecnología y la vida universitaria,
            estás en el lugar correcto ;).
          </p>
        </section>

        {/* Right side \ notas */}
        <section>
          <BlogList posts={posts} />
        </section>

      </div>
    </main>
  );
}
