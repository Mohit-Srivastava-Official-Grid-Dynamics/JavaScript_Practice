// const tinderUser = new Object();//this is singleton object

const tinderUser = {}; //This is not a singleton object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn =false;

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Mohit",
            lastName:"Srivastava"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a",6:"b"};

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id:1,
        email:"m1@gmail.com"
    },
    
    {
        id:1,
        email:"m2@gmail.com"
        
    },
    
    {
        id:1,
        email:"m3@gmail.com"
        
    },
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Destructring

const course = {
    courseName : "Js with Chai",
    price:"999",
    courseInstructor:"Hitesh"
}
course.courseInstructor;
const{courseInstructor:instructor} = course;

// console.log(instructor);
// {
//     "name":"Hitesh",
//     "courseName":"Js with Chai",
//     "price":"free"

// }

// [
//     {},
//     {},
//     {}
// ]


//React

// const navbar = ({company}) =>{

// }
// navbar(company= "GD")

// { 
//     "name": "Mohit",
//     "courseName": "JS with Chai",
//     "price": "Free"
// }



[
    {},
    {},
    {}
]
