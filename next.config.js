/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
