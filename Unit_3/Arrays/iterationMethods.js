//! Iteration Methods
/* 
    - Do not destroy the original array
    - take in callback function, assumes to be invoked
    - loop through arrays
    - must a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

//! Declaration/ new variable doesn't need to be const it can be let.
//* ARROW FUNCTION w/ BLOCK BODY
const filteredFruit = fruits.filter(fruit => {
    // console.log('Parameter: ', fruit)
    let result = fruit !== 'mango';
    // console.log('Inside Filter:', result);
    return result;
});

// console.log(filteredFruit);

let fruit1 = 'pineapple';
// console.log(fruit1[0]);
// console.log(fruit1.includes('apple'))


//* ARROW FUNCTION w/ CONCISE BODY - Creates a new list of array after you console log or run the code.
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
console.log(filteredFruit2);

//* Function Example
function removeMango(fruit) {
    return fruit !== 'mango'
}

const filteredFruit3 = fruits.filter(removeMango) // doesn't need to put the () to be invoked because it assumes its going to be invoked by the name inside the filter.
console.log(filteredFruit3);

/* 
! Challenge:
    How do you remove the 5s from the array?
    Store in in a new variable and console.log that variable/
*/

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

function removeFive(num) {
    return num !==5;
}

const noFives = myNumberArray.filter(removeFive)
console.log(noFives);

let movies = [
    { name: "Top Gun 2", category: 'Action' },
    { name: "Scary Movie 5", category: 'Horror' },
];

movies.push({name: "It", category: 'Horror'});
movies.push({name: "Get Out", category: 'Horror'});
movies.push({name: "Taken", category: 'Action'});

// Dot Notation to filter the category we want
const actionMovies = movies.filter(movie => movie.category === 'Action');
const horrorMovies = movies.filter(movie => movie.category === 'Horror');

console.log('Horror:', horrorMovies);
console.log('Action:', actionMovies);


//! .forEach()
// this a way to write loops in a shorter/cleaner way?
let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

for(let i = 0; i < newFoodList.length; i ++) {
    console.log(newFoodList[i])
}

newFoodList.forEach((item, i) => console.log('ForEach:', item, "index:", i));

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/


let titlesList = ["Gladiator", "Iron Man", "Avengers", "Justice League", "Jurassic Park"];

titlesList.push('Aladdin');
titlesList.splice(2,1, 'Barbie');

titlesList.forEach((item, index) => console.log('Movie:', item, index));


//! .find()
// this goes through your array list and once it 'finds' what your are looking for it stops.
let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find:', tmnt.find(c => c == character));

character = 'April';
console.log('Find Again:', tmnt.find(c => c == character)); // this comes back as undefined because it couldn't find 'April

character = 'Splinter';
tmnt.find((c,i) => console.log('Index: ', c == character, "index:", i)); // this shows if its a true or false for each string in the array.


//! .map()
/* 
    - similar to a .forEach()
    - takes a callback function (cb)
    - creates a new array with the results of calling a provided function
*/
let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) {
    numArray.push(i);
}   //* a for loop with a push method adding a new value into the list of numArray.

numArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x); //* pushes or adds the new value into the array list
});

console.log(fizzBuzzArray);


/*
- First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
    - search something like "arrays", "javascript", "reverse"
    - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];
const reversed = arr.reverse();
console.log('reversed:', reversed);
arr.forEach((arr, index) => console.log('Reversed:', arr, index)); // This is how i did it.

//* this is how the instructor did it*// 
if(arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}