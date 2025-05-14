// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'], // Добавьте здесь домены для изображений, если необходимо
    },
    sassOptions: {
      includePaths: ['./styles'],
      prependData: `
        @import "@/styles/_variables.scss";
        @import "@/styles/_mixins.scss";
      `,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      
      return config;
    },
  }
  
  // Используем export default вместо module.exports для ES Modules
  export default nextConfig;