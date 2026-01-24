/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // required for static export
  },
};

module.exports = nextConfig;
/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here *
};

export default nextConfig;*/
