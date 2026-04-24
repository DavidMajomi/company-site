import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/core-banking",
        destination: "/products/loan-origination",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
