pols = (num) => {
  let word = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      word.push("Software Developer");
    } else if (i % 3 === 0) {
      word.push("Software");
    } else if (i % 5 === 0) {
      word.push("Developer");
    } else {
      word.push(i);
    }
  }
  return word;
};

let y = 123,
  x = 7;
console.log(pols(y - x));
