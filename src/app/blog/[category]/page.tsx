import Link from "next/link";
import { getPostsByCategory, getAllCategories } from "../../lib/getPosts";

// Generate static params for SSG
export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ category: cat }));
}

// Let nextjs infer params type safely
export default function CategoryPage({ params }: { params: any }) {
  const category = params.category;
  const posts = getPostsByCategory(category);

  if (!posts.length) {
    return <p>No posts found in {category}</p>;
  }

  return (
    <div className="prose mx-auto py-8">
      <h1>{category.toUpperCase()} Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${category}/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
