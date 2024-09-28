const obj = {
  math: 50,
  science: 60,
  gk: 40,
};

let total = 0;
for (const [, score] of Object.entries(obj)) {
  total += score;
}

console.log(total);
