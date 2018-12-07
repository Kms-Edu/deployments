
const {PHASE_PRODUCTION_SERVER} = require('next-server/constants')

const prefix = ''

module.exports = (phase, {defaultConfig}) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
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
          },
        )
        config.output.publicPath = `${prefix}${config.output.publicPath}`;
      }
    }    
  }
  
  const withLess = require('@zeit/next-less')
  const lessToJS = require('less-vars-to-js')
  const fs = require('fs')
  const path = require('path')
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
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    },
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
        },
      )
      config.output.publicPath = `${prefix}${config.output.publicPath}`;
  
      return config
    }
  });
}
