#!/usr/bin/env bun

# bun build src/index.ts --outdir=dist --format=esm --target=bun --config=./bunfig.toml --sourcemap=external --define=process.env.NODE_ENV:"'production'" --minify

bun ./scripts/build.js --outdir=dist --format=esm --target=bun --config=./bunfig.toml --sourcemap=external --define=process.env.NODE_ENV:"'production'" --minify=true