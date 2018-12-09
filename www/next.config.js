const dev = process.env.NODE_ENV !== 'production'
const prefix = dev ? '' : process.env.WWW_PREFIX

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
  const withLess = require('@zeit/next-less')
  const withStyledIcons = require('next-plugin-styled-icons')

  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {}
  }

  const lessToJS = require('less-vars-to-js')
  const fs = require('fs')
  const path = require('path')

  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(
      path.resolve(__dirname, './assets/antd-custom.less'),
      'utf8'
    )
  )
  const crittersConfig = {
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
  return withLess(withStyledIcons({
    ...defaultConfig,
    ...crittersConfig,
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
  }))
}
