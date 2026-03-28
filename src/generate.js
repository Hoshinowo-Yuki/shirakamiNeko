import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { personalProfileVars } from "./config.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const template = readFileSync(join(__dirname, "README.auto.template.md"), "utf-8");

let readme = template;
for (const [key, value] of Object.entries(personalProfileVars)) {
  readme = readme.replaceAll(`%${key}%`, value);
}

writeFileSync(join(__dirname, "..", "README.md"), readme);
console.log("SUCCESS: README.md updated.");