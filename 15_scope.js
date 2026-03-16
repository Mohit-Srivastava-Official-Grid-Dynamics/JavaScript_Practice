// const { use } = require("react");

var c = 300;
let a = 300;

if(true)
{
    let a = 10;
    const b = 20;
    
    // console.log("Inner:",a);
}

// console.log(a);
// // console.log(b);
// console.log(c);

function one()
{
    const username = "Mohit";
    function two()
    {
        const website = "Youtube";
        console.log(username);

    }
    // console.log(website);
    // two();

}
// one();

if(true)
{
    const username = "Mohit"
    if(username==="Mohit")
    {
        const website = "Yt";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


console.log(addOne(1));
function addOne(num)
{
    return num+1;
}
// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }




//  Scope
// var - scope -- function
// let - scope -- block
// const - scope -- block

/*

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase, before the code actually runs.

Important:
Only declarations are hoisted, not initializations.*/


//Avoid var

