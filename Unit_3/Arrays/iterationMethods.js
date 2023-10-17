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