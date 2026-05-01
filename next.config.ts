import createMDX from '@next/mdx'
import type { NextConfig } from "next"

const isGitHub = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGitHub ? "/welcome-to-stroksnes" : "",
  assetPrefix: isGitHub ? "/welcome-to-stroksnes/" : "",

  trailingSlash: true,

  images: { unoptimized: true },

  // MDX + Next.js page extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
