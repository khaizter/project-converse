/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.converse.ph",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
