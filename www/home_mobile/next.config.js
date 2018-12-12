const not_now = !process.env.NOW_REGION
const prefix = not_now ? '' : process.env.WWW_HOME_MOBILE_PREFIX
module.exports = {
  //useFileSystemPublicRoutes: false,
  assetPrefix: prefix,  
  webpack: config => {
    config.output.publicPath = `${prefix}${config.output.publicPath}`;

    return config
  }
};
