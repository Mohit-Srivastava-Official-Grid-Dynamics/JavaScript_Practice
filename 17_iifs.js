// Immediately Invoked Function Expressions (IIFE)
//to remove global scope pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("ite")