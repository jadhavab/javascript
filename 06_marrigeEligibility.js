var marriEligible=function(gender,age){
    returnValue ="";
    if (age>=21 && gender=="male") {
      returnValue= `age;${age} and gender= ${gender} person is eligible for marriage`
      
    } else {
      returnValue= `age;${age} and gender= ${gender} person is not eligible for marriage`
    
    }
    console.log(returnValue);
    return returnValue;
  }
  marriEligible("male",17);
  marriEligible("male",25);
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  var marriEligible=function(gender,age){
    returnValue ="";
    if (age>=18 && gender=="female") {
      returnValue= `age;${age} and gender= ${gender} person is eligible for marriage`
      
    } else {
      returnValue= `age;${age} and gender= ${gender} person is not eligible for marrage`
    
    }
    console.log(returnValue);
    return returnValue;
  }
  marriEligible("female",28);
  marriEligible("female",16);
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
marriEligible("other",35);
marriEligible("other",41);