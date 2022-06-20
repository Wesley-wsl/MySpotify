const withPWA = require('next-pwa')

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        domains: ["i.scdn.co", "mosaic.scdn.co", "seeded-session-images.scdn.co", "seed-mix-image.spotifycdn.com"],
    },
    pwa: {
        dest: "public",
        register: true,
    }
},)
