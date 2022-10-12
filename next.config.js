/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");

const nextConfig = {
  publicRuntimeConfig: {
    apikey: process.env.API_KEY,
    
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'openweathermap.org']
     

  },
  env: {
    apikey: process.env.API_KEY,
  },

};

module.exports = nextConfig;

