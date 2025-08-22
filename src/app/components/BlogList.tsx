// components/BlogListClient.tsx
'use client';
import { MDXRemote } from 'next-mdx-remote';

export default function BlogList({ posts }: { posts: any[] }) {
  return (
    <div>
      {posts.map((post, idx) => (
        <div key={idx}>
          <h2>{post.frontMatter.title}</h2>
          <MDXRemote {...post.mdxSource} />
        </div>
      ))}
    </div>
  );
}
