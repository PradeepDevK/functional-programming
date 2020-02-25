//function
/*A function is a process which takes some input, called arguments,
   and produces some output called a return value. */


//pure functions
//Pure functions always returns the same result if the same arguments are passed in.
function getSquare(x) {
    return x * x;
}

console.log("getSquare(2) --->", getSquare(2));
console.log("getSquare(4) --->", getSquare(4));
console.log("getSquare(2) --->", getSquare(2));

//impure functions
/* Any function that changes the internal state of one of its arguments or the value 
    of some external variable is an impure function. */
function imPure(x) {
    let len = x.length;
    for (let i = 0; i < len; i++) {
        x[i] = x[i] * x[i];
    }
    return x;
}

console.log("imPure(2) --->", imPure(2));
console.log("imPure(4) --->", imPure(4));
console.log("imPure(2) --->", imPure(2));