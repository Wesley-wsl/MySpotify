const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache")

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        domains: ["i.scdn.co", "mosaic.scdn.co", "seeded-session-images.scdn.co", "seed-mix-image.spotifycdn.com"],
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        runtimeCaching,
        dynamicStartUrl: false,
        buildExcludes: [/middleware-manifest.json$/]
    }
},)
