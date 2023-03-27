//### SYNCHRONOUS WAY

/* const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This is written by node.js\n ${textIn}. \nCreated on ${Date.now()}`;

const written = fs.writeFileSync("./txt/input.txt", textOut);

console.log(written);
 */

//### ASYNCHRONOUS WAY

const fs = require("fs");

fs.readFile("./txt/startttt.txt", "utf-8", (err, data1) => {
  if (err) {
    return console.log("ERROR!!");
  }
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("your file has been written.");
        if ((!data2 && data3) || err) {
          console.log("ERRORRR!!!");
        }
      });
    });
  });
});
