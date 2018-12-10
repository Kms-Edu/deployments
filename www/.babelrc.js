const env = require('./env-config.js')

module.exports = {
  plugins: [    
    ["macros"],
    ['transform-define', env],
  ],
  presets: ["next/babel"],
}
