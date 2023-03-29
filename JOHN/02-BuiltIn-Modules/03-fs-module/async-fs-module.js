const { readFile, writeFile } = require("fs");

//We can not reach values in functions out of scope.
//That's why we define functions in functions as callback functions

readFile(
  "./first.txt",
  "utf-8",
  (err, data) => {
    const first = data;
    readFile(
      "./second.txt",
      "utf-8",
      (err, data) => {
        const second = data;
        writeFile(
          "./async-result.txt",
          `Here is the async result: ${first}, ${second}`,
          (err, data) => {
            const result = data;
            console.log(result);
          }
        );
      }
    );
  }
);
