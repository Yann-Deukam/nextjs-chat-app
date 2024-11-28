import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   swcPlugins: [["next-superjson-plugin", {}]],
  // },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;
