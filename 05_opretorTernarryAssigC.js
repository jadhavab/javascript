function maleMarrriageEligibity(gender, age, boyName) {
  var result=
    gender == "male" && age >= 21
      ? `Hey ${boyName} you are eligible for marriage`
      : `unfortunetly ${boyName} You are not eligible , please try next time`;
      console.log(result);
}
maleMarrriageEligibity("female", 25, "Billgate");

maleMarrriageEligibity("female", 17, "Stew Jobs")
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Step2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
function femaleMarrriageEligibity(gender, age, girlName) {
    var result=
      gender == "female" && age >= 18
        ? `Hey ${girlName} you are eligible for marriage`
        : `unfortunetly ${girlName} You are not eligible , please try next time`;
        console.log(result);
  }
  femaleMarrriageEligibity("female", 16, "Jenifer");
  femaleMarrriageEligibity("female", 27, "Malinda Gates" )
  
  