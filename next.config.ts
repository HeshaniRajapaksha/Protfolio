import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// For GitHub Pages under https://HeshaniRajapaksha.github.io/Protfolio/
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
    ? "/Protfolio"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
