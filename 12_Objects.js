//Singleton
//Object.create
//Object literals

const mySym = Symbol("key1");
const jsUser = {
    name:"Mohit",
    "Full Name": "Mohit Srivastava",
    [mySym] : "myKey1",
    age:22,
    location : "Bangalore",
    email:"MohitSrivastava@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]


};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// // console.log(jsUser[Full Name]);
// console.log(jsUser[mySym]);

// console.log(jsUser);
// Object.freeze(jsUser);
// jsUser.email = "Mohit@chatGpt.com";
// console.log(jsUser);

jsUser.greeting = function()
{
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());