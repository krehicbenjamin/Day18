let myArr = [];
function* multiplication(x) {
  for (let i = x; i >= 0; i--) {
    myArr.push(yield (x *= 2));
  }
}
let num = multiplication(3);
for (let i = 0; i < 3; i++) {
  console.log(num.next().value);
}
module.exports = multiplication;