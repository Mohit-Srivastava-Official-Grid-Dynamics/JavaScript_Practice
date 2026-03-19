// const arr = [1,2,3,4,5];

// for(const num of arr)
// {
//     console.log(num);
// }

// const greetings = "Hello World";
// for(const greet of greetings)
// {
//     // console.log(greet);
//     console.log(`Each char is ${greet}`)
// }

//Map store unique values


// const map = new Map();
// map.set("IN","INDIA");
// map.set("IN","INDIA");
// map.set("USA","United States of America");
// map.set("FR","France");
// map.set("IT","Italy");

// console.log(map);


// for(const [k,v] of map)
{
    // console.log(k,"=",v);
}
// for(const key in map)
// {
//     console.log(`${key} = ${map[key]}`);
// }


const myObj = {
    game_1: "NFS",
    game_2: "GTA"
    
}

//Objects in JavaScript are not iterable.
// for(cont [k,v] of myObj)
//     {
        
//         // console.log(k,"=",v);
// }

// for(const key in myObj)
// {
//     console.log(`${key} = ${myObj[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     // console.log(programming[key]);
//     console.log(key);
// }

//Map is not iterable

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
