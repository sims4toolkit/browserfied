#!/usr/bin/env sh

set -e

browserify scripts/s4tk-api.cjs -o temp/s4tk-api.js

minify temp/s4tk-api.js > build/s4tk.min.js

node scripts/s4tk-specs.cjs
