import BlogList from "./components/BlogList";
import { getAllCategories, getPostsByCategory } from "./lib/getPosts";

export default function Home() {
  const categories = getAllCategories();
  const posts = categories.flatMap((cat) => getPostsByCategory(cat));

  return <BlogList posts={posts} />;
}
