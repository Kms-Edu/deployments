const env = require('./env')
const homePrefix = env['WWW_HOME_PREFIX']
const homeMobilePrefix = env['WWW_HOME_MOBILE_PREFIX']
const blogPrefix = env['WWW_BLOG_PREFIX']
const headers = (age) => {
  return {
    "cache-control": `max-age=${age}`
  }
}
const staticNextRoutes = [homePrefix, blogPrefix, homeMobilePrefix].map(item => {
  return {
    src: `${item}/_next/(.*)`,
    headers: headers(31536000),
    dest: `${item}/_next/$1`
  }
})

module.exports = [
  { "src": "/favicon.ico", "dest": "/static/favicon.ico" },
  { "src": "/robots.txt", "dest": "/static/robots.txt" },   
  { "src": "/static/logo.png", "dest": "/static/logo.png" },    
  ...staticNextRoutes,
  {
    src: "/docs/*",
    headers: headers(3600),
    dest: '/docs/index.html'
  },
  {
    src: "/",
    headers: headers(600),
    dest: `${homePrefix}/index`
  },
  {
    src: "/m",
    headers: headers(600),
    dest: `${homeMobilePrefix}/index`
  },
  {
    src: "/about",
    headers: headers(600),
    dest: `${homePrefix}/about`
  },
  {
    src: "/m/about",
    headers: headers(600),
    dest: `${homeMobilePrefix}/about`
  },
  {
    src: "/hello-world",
    headers: headers(600),
    dest: `${blogPrefix}/hello-world`
  },
  {
    src: "/archives",
    headers: headers(600),
    dest: `${blogPrefix}/archives`
  },
  { "src": "/api/pdf", "dest": "/api/handlers/pdf/index.go" },
  { "src": "/api/(.*)", "methods": ["POST"], "dest": "/api/handlers/$1" }
]
