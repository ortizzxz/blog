import type { NextConfig } from "next";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {};

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

export default nextConfig;
