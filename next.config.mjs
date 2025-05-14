// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
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
    output: 'export', // Добавляем статический экспорт
  }
  
  // Используем export default вместо module.exports для ES Modules
  export default nextConfig;