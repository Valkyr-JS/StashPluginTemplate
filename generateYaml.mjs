import writeYamlFile from 'write-yaml-file'
import pluginSettings from "./src/settings.json" with { type: "json" }
import * as pkg from "./package.json" with { type: "json" };
import fs from 'fs';

const filename =  pkg.default.name + ".yml"

// Only import the entry file. If you there are multiple entrypoints, you'll
// need to list them all here. 
const jsFiles = [pkg.default.name + ".js"]

// Check if CSS has been generated
const cssFiles = []

fs.readdir('dist/', (err, files) => {
  files.forEach(file => {
    const isCss = file.split(".")[file.split(".").length -1] === "css"
    if (isCss) cssFiles.push(file)
  });
});

const json = {
  name: pkg.default.name,
  description: pkg.default.description,
  url: pkg.default.homepage,
  version: pkg.default.version,
  ui: {
    javascript: jsFiles,
    css: cssFiles
  },
  settings: pluginSettings
}

writeYamlFile('dist/' + filename, json).then(() => {
  console.log('Generated source file "' + filename + '".')
})