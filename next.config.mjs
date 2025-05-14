// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'], // Добавьте здесь домены для изображений, если необходимо
    },
    sassOptions: {
      includePaths: ['./src/styles'],
      prependData: `
        @use "@/styles/_variables" as *;
        @use "@/styles/_mixins" as *;
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