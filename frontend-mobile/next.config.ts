import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactCompiler: true,
  turbopack: {},
} as NextConfig;

export default withPWA(nextConfig);
