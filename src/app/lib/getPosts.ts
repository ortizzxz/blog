import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
}

const postsDir = path.join(process.cwd(), "posts");

export function getPostsByCategory(category: string): PostMeta[] {
  const categoryDir = path.join(postsDir, category);
  if (!fs.existsSync(categoryDir)) return [];

  const files = fs.readdirSync(categoryDir);

  return files.map((filename) => {
    const filePath = path.join(categoryDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx?$/, ""),
      title: data.title || filename,
      date: data.date || "",
      category,
    };
  });
}

export function getPostSource(category: string, slug: string) {
  const basePath = path.join(postsDir, category);
  const mdxPath = path.join(basePath, `${slug}.mdx`);
  const mdPath = path.join(basePath, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const source = fs.readFileSync(filePath, "utf8");
  return source;
}

export function getAllCategories(): string[] {
  return fs.readdirSync(postsDir);
}
