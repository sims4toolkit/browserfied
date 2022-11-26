const fs = require("fs");
const path = require("path");

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../package.json")).toString()
);

const versions = [];
for (const name in pkg.devDependencies) {
  if (!name.startsWith("@s4tk")) continue;
  const version = pkg.devDependencies[name].replace("^", "");
  versions.push({ name, version });
}

fs.writeFileSync(
  path.resolve(__dirname, "../build/s4tk.specs.json"),
  JSON.stringify(versions, null, 2)
);
