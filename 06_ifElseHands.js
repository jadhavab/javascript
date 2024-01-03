var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue =  ` given no is ${num}  result=even`;
  } else {
    returnValue = `given no is ${num} odd`;
  } console.log(returnValue);
  return returnValue;
};
var result=isEvenOrOdd
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);
  

  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  
var eligibleVoter=function(age){
  returnValue ="";
  if (age>=18) {
    returnValue= `age;${age} he person is eligible for vote`
    
  } else {
    returnValue= `age;${age} he person is not eligible for vote`
  
  }
  console.log(returnValue);
  return returnValue;
}
eligibleVoter(18); 
eligibleVoter(20); 
eligibleVoter(17); 
eligibleVoter(40); 
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
var givenString="JavaScript Language"
if (givenString.startsWith("Java")) { console.log(`String startswith Java`);
  
} else { console.log(`String startswith Java`);
  
}