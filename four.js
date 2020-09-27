const fs = require("fs");
const input = fs.readFileSync("./input4.txt", "utf8").trim().split("\n");
input.shift();
let curCase = 1;

const a = (arr, num) => {};

for (var i = 0; i < input.length; i += 2) {
  a(input[i + 1].split(" "), curCase);
  curCase++;
}
