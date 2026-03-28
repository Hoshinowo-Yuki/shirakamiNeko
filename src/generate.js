import { readFileSync, writeFileSync } from "fs";
import { personalProfileVars } from "./config.js";

const template = readFileSync("README.template.md", "utf-8");

let readme = template;
for (const [key, value] of Object.entries(personalProfileVars)) {
  readme = readme.replaceAll(`%${key}%`, value);
}

writeFileSync("README.md", readme);
console.log("SUCCESS: README.md updated.");