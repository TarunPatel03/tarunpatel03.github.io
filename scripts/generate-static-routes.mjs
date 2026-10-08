import { mkdir, readFile, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const routes = ["cv", "cover-letter", "reflections", "portfolio", "connect"]
const outputDirectory = resolve("dist")
const appShell = await readFile(resolve(outputDirectory, "index.html"), "utf8")

await Promise.all(routes.map(async (route) => {
  const routeDirectory = resolve(outputDirectory, route)
  await mkdir(routeDirectory, { recursive: true })
  await writeFile(resolve(routeDirectory, "index.html"), appShell)
}))
