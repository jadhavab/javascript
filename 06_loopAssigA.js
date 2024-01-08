let s1 = "I am very good IT Developer";
let vowelsCount = 0;
for (let index = 0; index < s1.length; index++) {
  let char = s1.charAt(index).toLowerCase();
  if (char == `a` || char == `e` || char == `i` || char == `o` || char == `u`) {
    vowelsCount = vowelsCount + 1;
  }
}
console.log(`vowels count is: ${vowelsCount}`);
console.log(
  `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
);

console.log(`~~~~step03~~~~~ `);

let str1 = "Hard work always pays back";
  for (let index = 0; index < str1.length; index++) {
    let char = str1.charAt(index);
    if (index % 2 == 1 && char == "") {
      console.log(str1.charAt(index));
    }
  }


