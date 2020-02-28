//Finding the occurrences of a given string and replacing them with the given word.

let phrase = 'Bullet train are the best. They are among the best Train in the world.';
let newPhrase = phrase.replace(/train/g, 'trains')

//case sensitive RegEx
console.log("case sensitive RegEx ", newPhrase);

phrase = 'Bullet train are the best. They are among the best Train in the world.';
newPhrase = phrase.replace(/train/gi, 'trains');

//case insensitive RegEx
console.log("case insensitive RegEx ", newPhrase);


//using split() and join() method--> This is case sensitive
let newPhrase2 = phrase.split('train').join('trains');
console.log("with split() and join() ", newPhrase2);