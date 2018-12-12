export const imports = {
  'hello-world.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "hello-world" */ 'hello-world.mdx'),
  'Development/database.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "development-database" */ 'Development/database.mdx'),
}
