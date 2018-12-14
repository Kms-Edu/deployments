const env = require('./env-config.js')

module.exports = {
  plugins: [    
    ["macros"],
    ['transform-define', env],
    ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
    [
      "import", {
        "libraryName": "antd",
        "style": true
      }
    ],
  ],
  presets: ["next/babel"],
}
