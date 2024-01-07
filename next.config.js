/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    env: {
      VITE_APIKEY: process.env.VITE_APIKEY,
      VITE_AUTHDOMAIN: process.env.VITE_AUTHDOMAIN,
      VITE_PROJECTID: process.env.VITE_PROJECTID,
      VITE_STORAGEBUCKET: process.env.VITE_STORAGEBUCKET,
      VITE_MESSAGINGSENDERID: process.env.VITE_MESSAGINGSENDERID,
      VITE_APPID: process.env.VITE_APPID,
    },
  };
  
  module.exports = nextConfig;
  