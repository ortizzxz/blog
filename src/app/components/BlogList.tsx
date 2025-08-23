interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
}

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-cyan-800 dark:text-cyan-400 mb-8">
        Últimas Notas
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 transition-transform hover:scale-[1.01] hover:shadow-md"
          >
            <a
              href={`/blog/${post.category}/${post.slug}`}
              className="block"
            >
              <h2 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}{" "}
                • <span className="capitalize">{post.category}</span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
