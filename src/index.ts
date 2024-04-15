import router from "./router"

const hostname = "0.0.0.0"
const isDev = process.env.NODE_ENV !== "production"

Bun.serve({
  hostname,
  development: isDev,
  async fetch(req) {
    router.reload()
    const matchedRoute = router.match(req);

    if (new URL(req.url).pathname === "/release") {
      return new Response(Bun.file('.release.txt'))
    }

    if (!matchedRoute) {
      const notFoundRoute = router.match('/404')
      const res = new HTMLRewriter().on("head", {
        element(el) {
          el.append(`<link rel="stylesheet" href="style">`, {
            html: true
          })
        }
      }).transform(await Bun.file(notFoundRoute?.filePath!).text());
      return new Response(res)
    }

    return new Response(Bun.file(matchedRoute.filePath))
  }
})