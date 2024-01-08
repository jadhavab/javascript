const arrayword=["Banana","Orange","Apple","Mango","Water Melon"]

const arryword1 = arrayword[0];
const arraywordl= arrayword[4]
console.log(`Element first is: ${arryword1} and last is :${arraywordl}`);
console.log(`~~~~~~~~~~~~~~~~~~~~step2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const arraywordadd=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`original array : ${arrayword}`);
arraywordadd.unshift("Papaya");
console.log(`after adding papaya : ${arraywordadd}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~step3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const arraywordrem=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`original arry ${arraywordrem}`);
 arraywordrem.splice(3,1);
console.log(`After removing Mango :${arraywordrem}`);
console.log(`~~~~~~~~~~~step4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const  arrayL=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`original arry: ${arrayL}`);
arrayL. push("pineapple");
console.log(`after adding  pineapple : ${arrayL}`);
console.log(`~~~~~~~~~~~~~~~~step5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const  arrayR=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`original arry: ${arrayR}`);
arrayR.splice(4,0, `Dragan fruit`)
console.log(`After addding dragan fruit :${arrayR}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~step6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const  arrayRep=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`original arry: ${arrayRep}`);
arrayRep.splice (1,1,`Kiwi`)
console.log(`After replacing orange with kiwi:${arrayRep}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~step7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const  arraySlice=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`original arry: ${arraySlice}`);
const element= arraySlice.slice(1,4);
console.log(`Element starting from 1-4:${element}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~step8~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
const  arrayL3=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`original arry: ${arrayL3}`);
const Last3element= arrayL3.slice(2,5);
console.log(` Last 3 Element :${Last3element}`);
