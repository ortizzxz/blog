import Link from "next/link";
import { getPostsByCategory, getAllCategories } from "../../lib/getPosts";

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ category: cat }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category);

  if (!posts.length) {
    return <p>No posts found in {params.category}</p>;
  }

  return (
    <div className="prose mx-auto py-8">
      <h1>{params.category.toUpperCase()} Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${params.category}/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
