import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// GitHub Pages repo is 'Protfolio' -> https://heshanirajapaksha.github.io/Protfolio/
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
    ? "/Protfolio"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
