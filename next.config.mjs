/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

nextConfig.headers = async () => [
  {
    source: "/(.*)",
    headers: [
      {
        key: "X-Frame-Options",
        value: "ALLOWALL",
      },
      {
        key: "Content-Security-Policy",
        value: "frame-ancestors *",
      },
    ],
  },
];

export default nextConfig;
