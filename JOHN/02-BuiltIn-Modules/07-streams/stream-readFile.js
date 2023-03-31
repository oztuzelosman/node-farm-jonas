//We used to read files like this.

/* const { readFileSync } = require("fs");

const first = readFileSync(
  "./JOHN/02-BuiltIn-Modules/07-streams/hugetext.txt",
  "utf-8"
);

console.log(first);
 */
//###################################

//READING DATAS AS STREAMS (SEQUENCES)

const { createReadStream } = require("fs");

const stream = createReadStream(
  "./JOHN/02-BuiltIn-Modules/07-streams/hugetext.txt"
);

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
