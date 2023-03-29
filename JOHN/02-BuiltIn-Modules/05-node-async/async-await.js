const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText(
      "./JOHN/02-BuiltIn-Modules/03-fs-module/first.txt"
    );
    const second = await getText(
      "./JOHN/02-BuiltIn-Modules/03-fs-module/second.txt"
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
