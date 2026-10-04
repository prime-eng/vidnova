import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/vidnova",

  assetPrefix: "/vidnova/",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;