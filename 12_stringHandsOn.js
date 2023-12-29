function strigHandsOn() {
    var givenString ="   Hey you are doing good, keep it up    ";
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Assign_02~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`01_Given string is; ${givenString}`);
console.log(`02_length of given string is:${givenString.length}`);
var trimedString = givenString .trim();
console.log(`03_String after triming: ${trimedString } ;length of trimedstring is:${trimedString.length}`);
var ExpResult= givenString.length - trimedString.length
console.log(`04_total no of removed spaces :${ExpResult}`);
console.log(`05_first charecter of the string is: ${trimedString.charAt(0)} and last charecter of the string is ${trimedString.charAt(33)} `);
console.log(`06_Total no of word in the string is: ${trimedString.split(" ").length}`);
console.log(`07_index of word good is;${givenString.indexOf("good")}`);
console.log(`08_substring starting from index22: ${trimedString.substring(22)}`);
console.log(`Slice starting from index22: ${trimedString.slice(22)}`);
console.log(`09_is the string is end with word "up" : ${trimedString.endsWith("up")}`);
console.log(`10_is the string is start with word "Hey" : ${trimedString.startsWith("Hey")}`);

};
strigHandsOn()

