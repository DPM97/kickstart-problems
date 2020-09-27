const fs = require("fs");
const input = fs.readFileSync("./input1.txt", "utf8").trim().split("\n");
input.shift();
let curCase = 1;

const a = (max, arr, num) => {
  let final = [];

  while (final.length != arr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr[i] -= max;
        if (arr[i] <= 0) {
          final.push(i + 1);
        }
      }
    }
  }

  return console.log(
    `Case #${num}: ${final.toString().replace(new RegExp(",", "g"), " ")}`
  );
};

for (var i = 0; i < input.length; i += 2) {
  let max = input[i].split(" ")[1];
  a(max, input[i + 1].split(" "), curCase);
  curCase++;
}
