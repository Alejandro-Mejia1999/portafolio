/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
   images: {
    domains: ['localhost'], // para desarrollo
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // permite todas las imágenes externas
      },
    ],
    unoptimized: true, // si usas imágenes estáticas
  },
  trailingSlash: true,
}
}

export default nextConfig
