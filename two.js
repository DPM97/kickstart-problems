const { Console } = require("console");
const fs = require("fs");
const input = fs.readFileSync("./input2.txt", "utf8").trim().split("\n");
let cases = input[0];
input.shift();

let newProbs = [];

let done = false;
let i = 0;
while (!done) {
  newProbs.push(i);
  let num = input[i].split(" ")[0];
  i += parseInt(num) + 1;
  if (newProbs.length == cases) done = true;
}

const checkTimes = (times, interval) => {
  for (const e of times) {
    if (e[1] - e[0] > interval) {
      return false;
    }
  }
  return true;
};

const a = (e, i) => {
  return new Promise((resolve, reject) => {
    let times = [];
    let interval = input[e].split(" ")[1];
    let am = input[e].split(" ")[0];
    for (var i = 0; i < am; i++) {
      times.push(input[e + i + 1].split(" "));
    }

    times = times.sort((a, b) => a[0] - b[0]);

    while (!checkTimes(times, interval)) {
      times.forEach((e, i) => {
        if (e[1] - e[0] > interval) {
          let cc = e;
          times[i] = [e[0], (parseInt(e[0]) + parseInt(interval)).toString()];
          times.splice(i + 1, 0, [times[i][1], cc[1]]);
        }
      });
    }

    let finished = false;
    while (!finished) {
      smallestGap = 100 ^ 9;
      let index = -1;
      for (var j = 0; j < times.length - 1; j++) {
        let gap = times[j + 1][1] - times[j][0];
        if (gap < smallestGap && gap < interval) {
          smallestGap = gap;
          index = j;
        }
      }
      if (index == -1) {
        finished = true;
      } else {
        let start = times[index][0];
        times.splice(index, 1);
        times[index][0] = start;
      }
    }
    console.log(times);
    resolve(times.length);
  });
};

newProbs.forEach(async (e, i) => {
  console.log(`Case #${i + 1}: ${await a(e, i)}`);
});
