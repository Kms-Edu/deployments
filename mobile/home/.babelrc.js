const env = require('./env-config.js')
module.exports = {
  "presets":  ["next/babel"],
  "plugins": [
    ['transform-define', env],
    "macros",
    ["import", {
      "libraryName": "antd-mobile",
      "style": "css"
    }]
  ]
}
