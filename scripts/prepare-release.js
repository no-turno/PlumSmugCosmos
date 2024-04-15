const { version, ...config } = await Bun.file("package.json").json()

const releaseTarget = process.env.DEPLOYMENT_RELEASE_TARGET

let [major, minor, patch] = version.split(".").map(Number)

if (releaseTarget === "major") {
  major += 1
}

if (releaseTarget === "minor") {
  minor += 1
}

if (releaseTarget === "patch") {
  patch += 1
}

const newVersion = `${major}.${minor}.${patch}`

const shouldCommit = prompt("Commit release notes? (y/n)", "n")

if (shouldCommit === "y") {
  await Bun.write('.release.txt', newVersion)
  await Bun.write("package.json", JSON.stringify({
    version: newVersion,
    ...config
  }, null, 2))
}

