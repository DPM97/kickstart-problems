const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");
input.shift();
let curCase = 1;

const a = (arr, num) => {
  if (arr.length <= 1) return console.log(`Case #${num}: 0`);
  let jmp = null;
  let counters = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let tempJ = arr[i + 1] - arr[i];
    if (tempJ == jmp) {
      counters[counters.length - 1] += 1;
    } else {
      counters.push(1);
      jmp = tempJ;
    }
  }
  return console.log(`Case #${num}: ${counters.sort((a, b) => b - a)[0] + 1}`);
};

for (var i = 0; i < input.length; i += 2) {
  a(input[i + 1].split(" "), curCase);
  curCase++;
}
