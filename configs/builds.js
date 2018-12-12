module.exports = [
  {
    "src": "www/home/package.json",
    "use": "@now/next",
    "config": {
      "useBuildUtils": "@now/build-utils@canary",
      "maxLambdaSize": "50mb"
    }
  },
  {
    "src": "www/blog/next.config.js", "use": "@now/next"
  },
  {
    "src": "www/home_mobile/next.config.js", "use": "@now/next"
  },   
  { 
    "src": "api/handlers/**/index.js", "use": "@now/node" 
  },
  { 
    "src": "api/handlers/**/index.go", "use": "@now/go" 
  },
  {
    "src": "/static/*", "use": "@now/static"
  },
  { "src": "docs/package.json", "use": "@now/static-build" }
]
