import { FileSystemRouter } from "bun"

const routerDir = process.env.ROUTER_DIR ?? "public"
const routerOrigin = process.env.ROUTER_ORIGIN ?? '59300d95-bbc9-48dd-a5f4-97cc84e8428d-00-2dos3ee9tcx0d.riker.replit.dev'

const router = new FileSystemRouter({
  dir: routerDir,
  style: "nextjs",
  fileExtensions: [
    ".css",
    ".html",
    ".png"
  ],
  origin: routerOrigin
});

export default router