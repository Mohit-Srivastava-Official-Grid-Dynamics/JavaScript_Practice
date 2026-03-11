const name = "Mohit Srivastava";
const repoCount = 5;

// console.log(name + repoCount + " Value");

//String Interplation
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Mohit-Srivastava");

console.log(typeof(gameName));

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-15,-1);
console.log(anotherString);

const newStringOne = "     Mohit    ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(gameName.replace('Mohit','Sunny'));
// console.log(gameName);
console.log(gameName.split('-'));
