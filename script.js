console.log(a);     // undefined (not error!)
console.log(b);     // ReferenceError: Cannot access 'b' before initialization
var a = 10;
let b = 20;

sayHello();         // Works due to hoisting
// sayGoodbye();    // Error: sayGoodbye is not a function

function sayHello() {
    console.log("Hello!");
}

var sayGoodbye = function() {
    console.log("Goodbye!");
}