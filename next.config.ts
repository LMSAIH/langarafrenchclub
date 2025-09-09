import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // ensure turbopack uses this folder as the workspace root
    root: path.resolve(__dirname),
  },

  /* config options here */
};

export default nextConfig;
