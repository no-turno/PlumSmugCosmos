import router from "./router"

const hostname = "0.0.0.0"
const isDev = process.env.NODE_ENV !== "production"

Bun.serve({
  hostname,
  development: isDev,
  async fetch(req) {
    router.reload()
    const matchedRoute = router.match(req);

    if (!matchedRoute) {
      const notFoundRoute = router.match('/404')
      return new Response(Bun.file(notFoundRoute?.filePath!))
    }

    return new Response(Bun.file(matchedRoute.filePath))
  }
})