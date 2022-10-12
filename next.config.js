/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_CONFIG_URL: process.env.NEXT_PUBLIC_URL,
		PUBLIC_CONFIG_URL: process.env.PUBLIC_URL,
	},
};

module.exports = nextConfig
