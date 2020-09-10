// conditionals.js
const diff = 123 - 7;
for (let i = 1; i <= diff; i++) {
  let output = "";
  if (i % 3 !== 0 && i % 5 !== 0) {
    output = i;
  } else {
    if (i % 3 === 0) {
      output += "software ";
    }
    if (i % 5 === 0) {
      output += "development";
    }
  }
  console.log(output);
}