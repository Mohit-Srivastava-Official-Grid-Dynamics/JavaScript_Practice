//Arrays

const myArr = [0,1,2,3,4,5,true,"Mohit"];

//Array object -enbales storing a collection of multiple items under a single variable name, and has 
//members for performing common array operations.

//In JS:: Arrays are not primitivies but are instead array objects.
//JS Arrays are resizable.

// console.log(myArr[0]);

//JS array copy operations create shallow copies
//Shallow Copy-> copy whose properties share the same references 

//Deep Copy-> Copy which does not share the same reference point

const myHeroes = ["Shaktimann","nagraj"];
const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[2]);


// //Array Methods

// myArr2.push(5);
// console.log(myArr2);
// myArr2.pop();
// console.log(myArr2);
// myArr2.unshift(9);
// console.log(myArr2);
// myArr2.shift();
// console.log(myArr2);
// console.log(myArr2.includes(10));
// console.log(myArr2.indexOf(1));

const newArr = myArr2.join();
// console.log(myArr2);
// console.log(newArr);

//Slice and Splice
console.log("Actual array");
console.log(myArr2);

console.log("Slice");
const myn1 = myArr2.slice(1,3);
console.log(myArr2);
console.log(myn1);

console.log("Splice");
const myn2 = myArr2.splice(1,3);
console.log(myArr2);
console.log(myn2);