//String, reverse each word in the sentence
let string = 'Welcome to coding challenge';

const reverseBySeparator = (string, separator) => {
    return string.split(separator).reverse().join(separator);
}

 let reverseEntireSentence = reverseBySeparator(string, "");
 console.log('reverseEntireSentence', reverseEntireSentence);

 let reverseEachword =  reverseBySeparator(reverseEntireSentence, " ");
 console.log('reverseEachword ', reverseEachword);


//empty an arrayList
let arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
  //method1
  arrayList = [];

  //method2
  arrayList.length = 0;

  //method3
  arrayList.slice(0, arrayList.length)

  //method4
  while(arrayList.length) {
      arrayList.pop();
  }

//check if num is an integer
const isInt = num => {
    return num % 1 === 0;
}

console.log('isInt(4)', isInt(4));
console.log('isInt(0.5)', isInt(0.5));
console.log('isInt(0.0)', isInt(0.0));
console.log('isInt(0)', isInt(0));
console.log('isInt(-1)', isInt(0));

//callback func
const modifyQueries = (arrOne, callback) => {
    // do something to arr here
    arrOne.push(100);
    // then execute the callback function that was passed
    callback();
}

let arrOne = [1, 2, 3, 4, 5, 6];
modifyQueries(arrOne, () => {
    console.log('array has been modified ', arrOne);
})