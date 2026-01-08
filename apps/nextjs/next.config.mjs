// @ts-check

//import { withNextDevtools } from "@next-devtools/core/plugin";
import withMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  // Apenas o pacote UI precisa ser transpilado agora
  transpilePackages: ["@saasfly/ui"],

  pageExtensions: ["ts", "tsx", "mdx"],

  experimental: {
    mdxRs: true,
  },

  images: {
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "www.twillot.com",
      "cdnv2.ruguoapp.com",
      "www.setupyourpay.com",
      "mindloop.ia.br",
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  output: "standalone",
};

// MDX + Devtools
export default withMDX()(config);
