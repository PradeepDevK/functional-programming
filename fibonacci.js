//fibonacci
const fibonacci = (num) => {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1 ) + fibonacci(num - 2);
}
console.log('fibonacci(1) ------>', fibonacci(1));
console.log('fibonacci(5) ------>', fibonacci(5));
console.log('fibonacci(7) ------>', fibonacci(7));

//fibonacci series
const series = [];
const fibonacciSequence = (num) => {
    let x = 0;
    let y = 1;
    let fibArray = [0];

    while (y < num) {
        fibArray.push(y);
        y += x;
        x = y - x;        
    }

    return fibArray;
}
console.log('fibonacciSequence(1) ------>', fibonacciSequence(1));
console.log('fibonacciSequence(5) ------>', fibonacciSequence(5));
console.log('fibonacciSequence(3) ------>', fibonacciSequence(3));