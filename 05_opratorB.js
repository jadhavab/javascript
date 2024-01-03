function greaterNumber(num1, num2) {
  console.log(`given numbers are ${num1},${num2}`);
  var result =
    num1 > num2
      ? `${num1} is greater than ${num2}`
      : `${num2} is greater than ${num1}`;
  console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(
  `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
);
function isEvenOrOddNum(no) {
  console.log(`givn no is ${no}`);
  var check = no % 2 == 0 ? ` given no is"EVEN` : `given no is "odd"`;
  console.log(check);
}
isEvenOrOddNum(29);
console.log(
  `=================================================================`
);
isEvenOrOddNum(44);
console.log(
  `=================================================================`
);
isEvenOrOddNum(0);
console.log(
  `=================================================================`
);
isEvenOrOddNum(101);
console.log(
  `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Step3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
);

function wordLength(str) {
  console.log(`given string is: ${str}`);
  var length = str.length;
  console.log(`Length of given string is:${length}`);
  var wordLength =
    length % 2 == 0 ? ` word length is"EVEN"` : `word length is "odd"`;
  console.log(wordLength);
}
wordLength("JavaScript");
console.log(
  `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
);
wordLength("developer");
console.log(
  `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
);
wordLength("Google");
