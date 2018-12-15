const not_now = !(process.env.NOW_REGION || process.env.NOW)
const prefix = not_now ? '' : process.env.MOBILE_HOME_PREFIX
const dev = process.env.NODE_ENV !== 'production'

const { PHASE_PRODUCTION_SERVER } =
  dev
    ? {}
    : not_now // ℹ️ Must be `NOW_REGION`, not `NOW` (my bad)
      ? require('next/constants')
      : require('next-server/constants');

const sharedConfig = {
  //useFileSystemPublicRoutes: false,
  assetPrefix: prefix,  
  webpack: config => {
    config.output.publicPath = `${prefix}${config.output.publicPath}`;

    return config
  }
}

module.exports = (phase, {defaultConfig}) => {
  if (phase === PHASE_PRODUCTION_SERVER && !not_now) {
    return sharedConfig
  }
  const withCSS = require('@zeit/next-css')

  // fix: prevents error when .css files are required by node
  if (typeof require !== 'undefined') {
    // eslint-disable-next-line
    require.extensions['.css'] = (file) => {}
  }
  return withCSS(sharedConfig);
}