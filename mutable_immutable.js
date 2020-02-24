//mutable object - The object is subject to be changed/altered.
//immutable object - The object cannot be changed once created.

//immutable
let a = {
    foo: 'bar'
};

let b = a;

a.foo = 'test';

console.log(b.foo); // test
console.log(a === b) // true

let aa = ['foo', 'bar'];
let bb = aa;

aa.push('baz')

console.log(bb); // ['foo', 'bar', 'baz']
console.log(aa === bb) // true

function immutable(originalArray) {
    // Instead of mutating/modifying the original array,
    // we first make a copy of the original array
    // In this way, the original array stay unchanged.
    let newArray = [...originalArray];
    newArray[0] = "new value";
    return newArray;
}

let array1 = ["some value", "another value"];
console.log("Return from immutable " + immutable(array1));
console.log("Array: " + array1 + " (original array stay unchanged).");

//mutable
let a1 = 'test';
let b1 = a1;
a1 = a1.substring(2);

console.log(a1) //st
console.log(b1) //test
console.log(a1 === b1) //false

let aa1 = 1;
let bb1 = aa1;
aa1++;

console.log(aa1) //2
console.log(bb1) //1
console.log(aa1 === bb1) //false

function mutation(originalArray) {
    // directly mutating/modifying the original array
    originalArray[0] = "new value";
    return originalArray;
}

let array2 = ["some value", "another value"];
console.log("Return from mutation " + mutation(array2));
console.log("Array: " + array2 + " (original array has been altered).");