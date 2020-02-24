//isPrime

const isPrime = num => {
    if (num === 2)
        return true;
    for(let i = 2; i < Math.sqrt(num); i++) {
        if (num%i === 0)
            return false;
    }
    return true;
}

console.log('isPrime(0) ---> ', isPrime(0));
console.log('isPrime(2) ---> ', isPrime(2));
console.log('isPrime(3) ---> ', isPrime(3));
console.log('isPrime(5) ---> ', isPrime(5));
console.log('isPrime(10) ---> ', isPrime(10));