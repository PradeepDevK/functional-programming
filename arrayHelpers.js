//forEach
//forEach accept a function iterator that loop through each item in an array

console.log("---------> forEach");
const arr1 = [1, 2, 3, 4];
arr1.forEach(item => console.log(item));

//map
//Map will loop through each item of array, same like forEach but Map returns the value of the array.
console.log("---------> map");
const arr2 = [{name:'Pradeep',age:18}, {name:'Raj',age:20}];
const person_names = arr2.map(person => person.name);
console.log(person_names);

//filter
//Filter return array based on the boolean of the comparison
console.log("---------> filter");
const fruits = [{ name:'apple', color:'red'},
{ name:'lemon', color:'yellow'},
{ name:'grapes', color:'black'}];
const filteredFruits = fruits.filter(fruit => fruit.color === 'yellow');
console.log(filteredFruits);

//find
//find will return the record if a particular element is found in the array.
console.log("---------> find");
let x = [{ name:"pradeep", age: 1},
    { name:"raj", age: 30 }
];
console.log(x.find(obj => obj.name === "raj"));

//some
//some accept an iterator function that will return true or false
console.log("---------> some");
const names = ["Pradeep", "Raj", "K"];
names.some(name => name.length > 4);
console.log(names);

//every
//every is like some, but instead using OR operator it uses AND
console.log("---------> every");
const everyNames = ["Pradeep", "Raj", "K"];
everyNames.every(name => name.length > 4);
console.log(everyNames);

//reduce
//reduce is the most flexible helper, we can probably reimplement all the other helpers by just using reduce. 
console.log("---------> reduce");
const numbers = [1,2,3,4,5];
console.log(numbers.reduce((sum, number) => sum + number, 0));