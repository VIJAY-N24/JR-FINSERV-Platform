import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	serverExternalPackages: ["@prisma/client", "better-auth", "firebase"]
};

export default nextConfig;