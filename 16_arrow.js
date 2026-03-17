const user = {
    username: "Mohit Srivastava",
    price: "999",

    welcomeMessage : function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log("Outer console.log(this)");
// console.log(this);


// function chai()
// {
//     let username = "hitesh";
//     console.log(this.username);
//     // console.log(username);
// }
// // chai();

// const chai = function()
// {
//     let username = "Mohit";
//     return username;
    
// }
// console.log(chai());
// chai();

//Arrow Function

// const chai = () => {
//     let username = "Mohit";
//     console.log(this);
// }
// chai();


// const addTwo = (num1,num2) => num1 + num2;
// const addTwo = (num1,num2) =>( num1 + num2);

const addTwo = (num1,num2) => ({username:"Mohit"});
// console.log(addTwo(3,4));

const myArray = [2,3,4,5,6,7,8];
// myArray.forEach();




