console.log("======================================Function_01*Addition*======================================");
function addition(n1, n2)   {

  console.log("Given numbers is", n1, n2);
  var result = n1 + n2;
  console.log("Addition of given number:", result);
}
addition(15, 5);
addition(3, 97);
console.log(
  "======================================Function_02*Subtraction*======================================"
);
function subtraction(n1, n2) {
  console.log("Given numbers is", n1, n2);
  var result = n1 - n2;
  console.log("subtraction of given number:", result);
}
subtraction(15, 5);
subtraction(97, 3);
console.log("************************************Step2***********************************************");

function personalDetails(firstName,lastName,collegeName){
   console.log("My first name :",firstName);
   console.log("My last name:",lastName,);
   console.log("My college name:",collegeName);
  
}
personalDetails("Ajay","Jadhav", "KSK College");
console.log("******************************Step3******************************************");
function swapValues(value1, value2){
    console.log("************Before Swap************",);
    console.log("value1->", value1, );
    console.log("value2->", value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("*************After Swap****************");
    console.log("value1->", value1);
    console.log("value2->", value2);

}

swapValues("Virat", "Anushka");
swapValues(1000,2000);
console.log("***********************Step4******************************************************");
function addThreeValue(Value1,Value2,Value3 ){
    console.log("Value1=",Value1, );
    console.log("Value2=",Value2);
    console.log("Value3=",Value3);
    var result= Value1+Value2+Value3;
    console.log("Addition of 3Value =",result);

}
addThreeValue(10.23,600,40)
addThreeValue("Hello","Good","Morning");


