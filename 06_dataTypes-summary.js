//Primitve Data Types

// 7 categories

//These are call by values

// String, Number, Boolean ,null, undefined,  Symbol,  BigInt,

//Non primitve Data Types
//These are reference
//Array, objects, Functions

// JavaScript is statistically typed or dynamic typed 
// JavaScript is a Dynamically Typed Language. ⚡
//In a dynamically typed language, you do not need to declare the type of a variable, and the type can change at runtime.

// Example:

// let value = 10;       // number
// value = "Hello";      // now it's a string
// value = true;         // now it's a boolean

// JavaScript automatically handles the type changes.

// JavaScript is a dynamically typed and loosely typed language because variable types are determined at runtime and can change during execution.


const score = 100;
const scoreValue = 100.0000001;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id  = Symbol('123');
const anotherId  = Symbol('123');

console.log(id != anotherId);

const bigNumber = 1234567891234n;
/*


Summary 🧠
Method	Result
Symbol('123') === Symbol('123')	❌ false
Symbol.for('123') === Symbol.for('123')	✅ true

Reason:

Symbol() → always creates a new unique symbol

Symbol.for() → reuses symbol from global registry

💡 Why Symbols exist:
They are mainly used to create unique property keys in objects to avoid name collisions.

Example:

const id = Symbol("id");

const user = {
  name: "John",
  [id]: 101
};
*/


//Reference (Non primitve)

//Array, Objects, Functions

const heros = ["Shaktimann","GG","All"];

let myObj = {
    name:"Mohit",
    age:23
}

const myFunct = function(){
    console.log("Hello World");
}

// console.log(typeof(myObj) ); 
console.log(typeof(outSideTemp) );
console.log(typeof(bigNumber) );

//Stack -- Primitive Data Types
//Heap  -- Non-Primitive Data Types

//Stack -> Copy
//Heap -> original reference

let myYTname = "MohitYT";

let storage = myYTname;
console.log(storage);
storage = "MSyt";
console.log(storage);
console.log(myYTname);

let userOne = {
    email : "MS@google.com",
    upi:"ms@95ybl"
};


let userTwo = userOne;

userTwo.email ="ms@google.com";
console.log(userOne.email);
console.log(userTwo.email);

/*

6️⃣ Quick Memory Summary
Item	Stored in
userOne variable	Stack
userTwo variable	Stack
Object { email, upi }	Heap
email and upi properties	Inside object in Heap
*/