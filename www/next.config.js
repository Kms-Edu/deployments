
const prefix = ''
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? require("next/constants")
    : require("next-server/constants");

const sharedConfig = {
  assetPrefix: prefix,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push(
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      }
    )

    config.output.publicPath = `${prefix}${config.output.publicPath}`;

    return config
  }
}

module.exports = (phase, {defaultConfig}) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      ...sharedConfig,
    }
  }
  const withPlugins = require("next-compose-plugins");
  const withImages = require("next-images");
  const withFonts = require("next-fonts");
  const withPurgeCss = require("next-purgecss");
  const withCSS = require("@zeit/next-css");
  const withLess = require('@zeit/next-less')
  const lessToJS = require('less-vars-to-js')
  const fs = require('fs')
  const path = require("path");
  const glob = require("glob-all");
  const PATHS = {
    pages: path.join(__dirname, "pages"),
    components: path.join(__dirname, "components"),
    containers: path.join(__dirname, "containers")
  };

  const purgeCssConf = {
    purgeCss: {
      paths: [
        ...glob.sync(`${PATHS.pages}/**/*.{js,jsx,mjs}`),
        ...glob.sync(`${PATHS.components}/**/*.{js,jsx,mjs}`),
        ...glob.sync(`${PATHS.containers}/js/**/*.{js,jsx,mjs}`)
      ]
    }
  };

  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(
      path.resolve(__dirname, './asserts/antd-custom.less'),
      'utf8'
    )
  )

  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {}
  }

  const lessConf = {
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    }
  }

  const config = {
    ...defaultConfig,
    ...purgeCssConf,
    ...sharedConfig,
    ...lessConf,
    ...purgeCssConf,
  }

  return withPlugins([
    withLess, 
    withCSS, 
    withPurgeCss,
    withImages,
    withFonts,
  ])(phase, {defaultConfig:config});
}
