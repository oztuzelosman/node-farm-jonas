const { readFileSync, writeFileSync } = require("fs");

const firstRead = readFileSync("./first.txt", "utf-8");
const secondRead = readFileSync("./second.txt", "utf-8");

//////##### Writing

writeFileSync(
  "./JOHN/02-BuiltIn-Modules/03-fs-module/merged.txt",
  `Here is the result:\n${firstRead},${secondRead}`,
  { flag: "a" }
);
