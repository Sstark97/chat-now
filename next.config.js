/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
    dest: "public",
})

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "hips.hearstapps.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
            },
        ],
    },
}

module.exports = withPWA(nextConfig)
