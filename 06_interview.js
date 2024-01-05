function interview(gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
   console.log(`congratulation ${candidateName} you are eligible for TCS interview`); ;
  } else {
   console.log(`Unfortunately ${candidateName} you are not eligible for interview`); 
  }
}
interview(80, 86, 90, "Ajay");
interview(70, 65, 55, "Rahul");
interview(60, 79, 88, "Anup");
