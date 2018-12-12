const not_now = !process.env.NOW_REGION
module.exports = {
  'process.env.API_HOST': not_now ?  'edu-1.herokuapp.com/v1alpha1/graphql' : process.env.API_HOST,
  'process.env.NODE_ENV': process.env.NODE_ENV,
  'process.env.GOOGLE_CLIENT_ID': not_now ? '348227035708-ter7nr3ckok77jn08h1sjtircno59jkj.apps.googleusercontent.com' : process.env.GOOGLE_CLIENT_ID
}
