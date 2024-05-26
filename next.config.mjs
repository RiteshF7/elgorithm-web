/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    // async headers() {
    //     return [
    //         {
    //             source: '/api/category/list',
    //             headers: [
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 'no-store, max-age=0',
    //                 },
    //             ],
    //         },
    //     ];
    // },

};


export default nextConfig;
