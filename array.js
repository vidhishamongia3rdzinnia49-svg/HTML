let num = [8, 7, 15, 27, 6];

let mapped = num.map(n => n * 2);

let asc = [...mapped].sort((a, b) => a - b);
let desc = [...mapped].sort((a, b) => b - a);

document.getElementById("original").innerHTML =
  "Original Array: " + num;

document.getElementById("mapped").innerHTML =
  "Mapped Array: " + mapped;

document.getElementById("asc").innerHTML =
  "Ascending Order: " + asc;

document.getElementById("desc").innerHTML =
  "Descending Order: " + desc;

