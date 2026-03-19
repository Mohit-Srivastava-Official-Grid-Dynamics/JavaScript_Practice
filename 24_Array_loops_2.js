const coding  = ["js","ruby","cpp"];


// coding.forEach(function(val)
// {
//     console.log(val);
// })


// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item)
// {
//     console.log(item);
// }




// coding.forEach(printMe);


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })



const myCoding = [

    {
        languageName: "JavaScript",
        languageFileName : "js"
    },
    {
        languageName :"Java",
        languageFileName : "java"
    },
    {
        languageName : "C++",
        languageFileName : ".cpp"
    },

]
//arrow function with ForEach
// myCoding.forEach((item)=>{
    //     console.log(item.languageFileName);
    //     console.log(item.languageName);
    // })
    
    //arrow function with CallBack Function
myCoding.forEach(function(item)

{

    console.log(item.languageName);
})