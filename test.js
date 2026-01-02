// A simple function
function showName(name) {
    console.log("Name:", name);
}


// Higher-order function: accepts another function as a parameter
function withAge(fn, age) {
    // Call the function passed in (fn) with a name
    fn("Alice");
    console.log("Age:", age);
}

// Pass showName as an argument to withAge
withAge(showName, 25);
