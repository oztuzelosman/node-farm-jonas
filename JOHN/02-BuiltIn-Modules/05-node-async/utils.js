///#####
// MORE CONCISE VERSION

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile(
      "./JOHN/02-BuiltIn-Modules/03-fs-module/first.txt",
      "utf-8"
    );
    const second = await readFile(
      "./JOHN/02-BuiltIn-Modules/03-fs-module/second.txt",
      "utf-8"
    );
    await writeFile("./utilswriting.txt", `this is AWESOME!${first},${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();

///#####
// DEFAULT VERSION

/* const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise(
      "./JOHN/02-BuiltIn-Modules/03-fs-module/first.txt",
      "utf-8"
    );
    const second = await readFilePromise(
      "./JOHN/02-BuiltIn-Modules/03-fs-module/second.txt",
      "utf-8"
    );
    await writeFilePromise(
      "./utilswriting.txt",
      `this is AWESOME!${first},${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
 */
