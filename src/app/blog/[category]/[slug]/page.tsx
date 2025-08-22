import { getPostSource } from "../../../lib/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import { getAllCategories, getPostsByCategory } from "../../../lib/getPosts";

// Generate static paths for SSG
export function generateStaticParams() {
  const categories = getAllCategories();
  const params: { category: string; slug: string }[] = [];

  categories.forEach((cat) => {
    const posts = getPostsByCategory(cat);
    posts.forEach((post) => {
      params.push({ category: cat, slug: post.slug });
    });
  });

  return params;
}

// Page component
export default async function PostPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  // If getPostSource is async, await it
  const source = await getPostSource(params.category, params.slug);
  const { content, data } = matter(source);

  return (
    <article className="prose prose-slate dark:prose-invert mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-cyan-800 dark:text-cyan-400 mb-4">
        {data.title}
      </h1>

      {data.date && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(data.date).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      )}

      <MDXRemote
        source={content}
        components={{
          h2: (props) => (
            <h2
              className="text-2xl font-bold mt-8 mb-4 text-cyan-700 dark:text-cyan-300"
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className="text-xl font-semibold mt-6 mb-3 text-cyan-600 dark:text-cyan-200"
              {...props}
            />
          ),
          p: (props) => <p className="mb-4 leading-7" {...props} />,
          a: (props) => (
            <a
              className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 underline"
              {...props}
            />
          ),
          code: (props) => (
            <code
              className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm font-mono"
              {...props}
            />
          ),
          pre: (props) => (
            <pre
              className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto my-6"
              {...props}
            />
          ),
          blockquote: (props) => (
            <blockquote
              className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 italic text-gray-700 dark:text-gray-300 my-6"
              {...props}
            />
          ),
          ul: (props) => <ul className="list-disc ml-6 mb-4" {...props} />,
          ol: (props) => <ol className="list-decimal ml-6 mb-4" {...props} />,
        }}
      />
    </article>
  );
}
