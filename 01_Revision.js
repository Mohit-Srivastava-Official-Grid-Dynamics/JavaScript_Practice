// //Completed-10,1,2,4,6,7





// //#10.String Coding

// //1.Reverse a string




// // function reverseString(str)
// // {
// //     //strings in JS are immutable
// //     // return str.split("").reverse().join("");

// //     let result = "";
// //     for(let i=str.length-1;i>=0;i--)
// //     {
// //         result+=str[i];
// //     }
// //     return result;
// // }

// // console.log(reverseString("Mohit"));


// //2.Checking Palindrome

// // function isPalindrome(str)
// // {
// //     const reversed = str.split("").reverse().join("");
// //     return str === reversed;
// // }

// // console.log(isPalindrome("madam")); // true
// // console.log(isPalindrome("hello")); // false


// //3. Count Characters

// // function countChar(str)
// // {
// //     const freq = {};
// //     for(let i of str)
// //     {
// //         freq[i] = (freq[i] || 0)+1;
// //     }
// //     return freq;
// // }

// // // console.log(countChar("banana"));

// // //4.Count Vowels
// // function countVowels(str)
// // {
// //     const vowels = "aeiouAEIOU";
// //     let count =0;
// //     for(let char of str)
// //     {
// //         if(vowels.includes(char))
// //         {
// //             count++;
// //         }
// //     }
// //     return count;
// // }


// // console.log(countVowels("JavaScript"));




// //-----Strings Coding----
// //#1
// //var
// //let
// //const


// // function testVar()
// // {
// //     if(true)
// //     {
// //         var  a =10;
// //     }
// //     console.log(a);
// // }


// // testVar();


// //const


// //Important 

// //for const :: objects/arrays, contents can still change

// // const user = {name : "Mohit"};
// // user.name = "Rahul";


// // console.log(user.name);

// // const a =10;
// // a=11;
// // console.log(a);

// /*


// Use const by default
// Use let when reassignment is needed
// Avoid var in modern JS


// */


// //1.Var-let--const




// ///4.Promises and Async/Await
// //Promises and Async/await



// //Callback problem

// //Callback hell

// // setTimeout(()=>{
// //     console.log("Step_1");
// //     setTimeout(()=>{
// //         console.log("Step_2");
// //         setTimeout(()=>{
// //             console.log("Step_3");
// //         },1000);
// //     },1000);

// // },1000);


// //Promise Concept
// //promise--pending, fulfilled and rejected


// // const  myPromise = new Promise((resolve,reject)=>{

// //     let success = false;
// //     setTimeout(()=>{
// //         if(success)
// //         {
// //             resolve("data fetched successfully");
// //         }
// //         else
// //         {
// //             reject("something went wrong");
// //         }
// //     },1000);

// // });

// // myPromise
// //     .then((result)=>{
// //         console.log(result);
// //     })
// //     .catch((error)=>{
        
// //         console.log(error);
// //     });

//     //Async-await is a cleaner syntax over promises


// // function fetchData()
// // {
// //     return new Promise((resolve)=>{
// //         setTimeout(()=>{
// //             resolve("User data received");
// //         },1000);
// //     });
// // }


// // async function getData()
// // {
// //     const result = await fetchData();

// //     console.log(result);
// // }


// // getData();


// //Error handling with async/await


// // function fetchUser()
// // {
// //     return new Promise((resolve,reject)=>{
// //         let success = true;

// //         setTimeout(()=>{
// //             if(success)
// //             {
// //                 resolve("User found");
// //             }
// //             else
// //             {
// //                 reject("User not found");
// //             }
// //         },1000);

// //     });
// // }




// // async function getUser()
// // {
// //     try{
// //         const data = await fetchUser();
// //         console.log(data);
// //     }
// //     catch(error)
// //     {
// //         console.log("error:=",error);
// //     }
// // }

// // getUser();


// // ///4.Promises and Async/Await




// // // #2.Hoisting

// //It means JS moves declarations to the top of the scope  and make it initialized with undefinded  before execution





// // console.log(a);
// // var a = 5;

// // console.log(b); // Error due to Temporal Dead Zone of let
// // let b = 10;




// ///6.Shallow and Deep Copy

// //Shallow--Copy:: Only the top-level values are copied. Nested objects still share reference.

// // const obj1 = {
// //     name:"Mohit",

// //     address:{
// //         city:"Delhi"
// //     }
// // };

// // const obj2 = { ...obj1};

// // obj2.name = "Rahul";
// // obj2.address.city = "Mumbai";



// // console.log(obj1.name); //Mohit
// // console.log(obj1.address.city);  //Mumbai

// // Deep copy

// // A completely separate copy, including nested objects.



// // const obj1 = {
// //     name:"Mohit",

// //     address:{
// //         city:"Delhi"
// //     }
// // };

// // const obj2 = structuredClone(obj1);

// // obj2.name = "Sunny";
// // obj2.address.city = "Mumbai";

// // console.log(obj1.name);
// // console.log(obj1.address.city); // Delhi


// //Assignment operator



// // const obj1  = {name: "Mohit"};

// // const obj2 = { ...obj1};

// // obj2.name = "Sunny";

// // console.log(obj1.name);


// /*

// Interview line
// Spread operator makes shallow copy
// structuredClone() is better for deep copy in modern JS

// */



// ///6.Shallow and Deep Copy---Done



// //7.Call Back


// //Callback is a function passed into another function and executed later



// // function greet(name, CallBack)
// // {
// //     console.log("Hello",name);
// //     CallBack();
// // }


// // function sayBye()
// // {
// //     console.log("Bye");

// // }

// // greet("Mohit",sayBye);


// // setTimeout(()=>{
// //     console.log("Executed after 2 seconds");

// // },2000);

// //3. Closure
// //Closure happens when a function remembers variables from its outer
// //scope even after the outer function has finished.

// // function outer()
// // {
// //     let count = 0;
// //     function inner()
// //     {
// //         count++;
// //         console.log(count);
// //     }
// //     return inner;
// // }


// // const counter = outer();

// // counter();
// // counter();
// // counter();

// //Real use cas of closure-- data hiding, factory functions,
// //memoization, event handlers, callbacks with preserved state



// // function createBankAccount() 
// // {
// //   let balance = 1000;

// //   return{
// //     deposit(amount)
// //      {
// //       balance += amount;
// //       console.log("Balance:", balance);
// //     },
// //     getBalance()
// //      {
// //       console.log("Balance:", balance);
// //     }
// //   };


// // }


// // const account = createBankAccount();
// // account.getBalance(); // 1000
// // account.deposit(500); // 1500



// //Event/ How JS Works/Propagation / Bubbling




// // console.log("Start");

// // setTimeout(()=>{
// //     console.log("Timeout");
// // },1000);


// // Promise.resolve().then(()=>{
// //     console.log("Promise");
// // });  // microtasks

// // console.log("End");



// // document.getElementById("parent").addEventListener("click", ()=>{
// //     console.log("Parent");
// // },true);
// // // document.getElementById("parent").addEventListener("click",function()
// // // {
    
// // //     console.log("Parent clicked");
// // // },true);
// // document.getElementById("child").addEventListener("click", function () {
// //   console.log("child Button clicked");


// // },true);



// //Memoize--caching

// // function memoize()
// // {
// //     const cache = {};

// //     return function (arg) {
// //         if(cache[arg]!==undefined)
// //         {
// //             console.log("From Cache Memory");
// //             return cache[arg];
// //         }
// //         console.log("Calculated");
// //         const result = arg*arg;
// //         cache[arg] =result;
// //         return result;
// //     }


// // }




// // const memoized = memoize();

// // console.log(memoized(5));
// // console.log(memoized(5));

// // const cache = {};

// // function getData(key)
// // {
// //     if(cache[key]) return cache[key];

// //     const result = key*2;
// //     cache[key]=result;


// //     return result;
// // }

// // console.log(getData(8));




// // async function abc(){

// //     const a = await getFetched(abc);
// //      try{

// //      }
// //     catch{

// //     }

// // }



// // function outer()
// // {
// //     let i = 0;
// //     function inner()
// //     {
// //         i++;
// //         console.log(i);
// //     }
// //     return inner;
// // }
// // const counter=outer();

// // counter();
// // counter();
// // counter();


// // function getData()
// // {
// //     return Promise.resolve("Done");
// // }

// // async function show()
// // {
// //     const result = await getData();
// //     console.log(result);

// // }

// // show();



// //Memoize

// // const cache = {};

// // function getData(key)
// // {
// //     if(cache[key]) return cache[key];

// //     const result = key*2;
// //     cache[key]=result;


// //     return result;
// // }

// // // console.log(getData(8));




// // const arr = [1,2,3];
// // console.log(arr.map(x=>x*2));
// // console.log(arr.filter(x=>x>1));
// // console.log(arr.reduce((a,b)=>a+b,0));


// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("I am the parent");

// })


// document.getElementById("child").addEventListener("click",()=>{
//     console.log("I am the kid");
// })


function promiseRequest()
{
    

const obj = new Promise((resolve,reject) =>{
    resolve("Successful");

  return obj;

});
}

function promiseRequest()
{
    

const obj = new Promise((resolve,reject) =>{
    resolve("Successful");
    
    console.log(obj);
   return obj;

});
}

async function getRequest()
{
    const ans =  await promiseRequest();
    console.log(ans);
}

getRequest();



// async  function getRequest = ((s,e)=>
// {
//     const ans = await promiseRequest();
//     console.log(ans);
    
// },3000);

// async function name(params) {

//         const ans = await promiseRequest();
//     console.log(ans);
    
// }