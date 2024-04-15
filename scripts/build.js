const defineOptions = {};

const { minify, ...options } = Bun.argv.slice(2).map((param) => {
  const [key, value] = param.split("=")
  return {
    key: key.replaceAll("--", ""),
    value
  }
}).reduce((acc, param) => {
  if (param.key === "define") {
    const [t, v] = param.value.split(":");
    Object.assign(defineOptions, {
      [t]: v
    })
    return acc
  }
  return Object.assign(acc, { [param.key]: param.value })
}, {})

const buildOptions = {
  entrypoints: [
    "src/index.ts"
  ],
  loader: Bun.TOML.parse(await Bun.file("./bunfig.toml").text()).loader,
  minify: minify === "true",
  define: defineOptions,
  ...options,
}

Bun.build(buildOptions)