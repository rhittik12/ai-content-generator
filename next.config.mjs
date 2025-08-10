// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains:['cdn-icons-png.flaticon.com']
//     }
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/ai-content-generator',
    assetPrefix: '/ai-content-generator/',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};




export default nextConfig;