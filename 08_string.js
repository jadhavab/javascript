var myName = "Gajanan Kharat";
var result = myName.replace("Kharat", " Bill")
console.log(result);


var city = "  Pune  ";
console.log(city.length);
var trimResult = city.trim();
console.log(` After trim city is: ${trimResult}, It's length is: ${trimResult.length} `);
var num = 15;
var result = num.toString();
console.log(` Number is ${num} and it's type is ${typeof num} `);
console.log(` After conversion number is ${result}, it's type is ${typeof result}`);

var greet = "Good Morning";
var isAvailable = greet.includes("ing");
console.log(` Is substring "ing" available => ${isAvailable}`);

var result = greet.slice(5, 10);
console.log(` Slice is ${result}  `);

var word = "Jenny Herry";
var result = word.split(" ");
console.log(result);
console.log(` Total words in the string is: ${result.length} `);
console.log(typeof result);

var givenString = "Hey I am UI and Java Developer";
var result = givenString.split(" ");
console.log(result);
console.log(`Total words in string is: ${result.length}`);