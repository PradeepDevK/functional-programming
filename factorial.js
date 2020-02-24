//factorial recurssion
const factorial = num => {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

console.log('factorial(0) --->', factorial(0));
console.log('factorial(1) --->', factorial(1));
console.log('factorial(3) --->', factorial(3));
console.log('factorial(5) --->', factorial(5));
console.log('factorial(6) --->', factorial(6));
console.log('factorial(10) --->', factorial(10));