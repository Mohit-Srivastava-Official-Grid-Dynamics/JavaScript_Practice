
function sayMyName(){
    console.log("M");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
    // return "a";
}

// console.log(sayMyName());
// sayMyName();

// function addTwoNumbers(a,b){
//     console.log(a+b);

// }
// addTwoNumbers(6,1);

function addTwoNumbers(a,b){
    return a+b;

}
addTwoNumbers(1,2);
// console.log(addTwoNumbers(4,3));


// const result = addTwoNumbers(1,2);
// console.log(`${a}+${b}`,result);

/*
Falsy values include:

false
0
""
null
undefined
NaN
*/



function loginUserMessage(username = "sam")
{
    if(!username)
    {
        console.log("Please enter a username");
        return ;

    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage(undefined));
//Rest operator, same is spread operator depending on use case, but here it is rest

function calculatedCartPrice(v1,v2,...num1)
{
    return num1;
}

// console.log(calculatedCartPrice(1,2,3,4,5));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));