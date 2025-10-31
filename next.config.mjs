/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const assetPrefixEnv = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ""

const nextConfig = {
  output: "export",
  basePath: basePath ? `/${basePath.replace(/^\/|\/$/g, "")}` : undefined,
  assetPrefix:
    assetPrefixEnv !== ""
      ? assetPrefixEnv
      : basePath
        ? `/${basePath.replace(/^\/|\/$/g, "")}`
        : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
