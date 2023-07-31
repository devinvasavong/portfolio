/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts')
const nextConfig = {}

module.exports = withFonts({
    webpack(nextConfig, options) {
        return nextConfig
    }
})
