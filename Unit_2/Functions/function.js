/* 
! Functions
    - Block of code that performs a particular task.
    - simplified programs that run a task when invoked
*/

/* 
! Function Declaration
    (1)        (2)
    function hi(){

        console.log('Hi');
    }

    1. Keyword
    2. Name of the function
        - parenthesis is for parameter
*/
function hi() {
    console.log('Hi!');
}

/* 
! Function Expression
    (1)
    let hey = function hi() {
        console.log('Hi!);
    }

    1. The variable "hey" is now representative of the function "hi"

    Does NOT get hoisted
*/

let hey = function hello() {
    console.log('Hi again')
}

/* 
    function hi() {
        console.log('hi')
    }

    (1)
    hi();

    1. This is how we call, or "invoke" our function.
*/

function greetings() {
    console.log('Hello');
}

greetings;
greetings();
console.log(greetings);

// Create a function that, when invoked, lists out the numbers 1-10. Name our function "counting".

function counting() {
    for(let x = 1; x <=10; x++){ // let is optional
    console.log(x)
    }
}

counting();

// Given an array, create a function that lists out the values individually. Name the function arrList.

let arr = ['This', 'is', 'really', 'cool'];

let arrList = function arrList() { // Written as an Expression
    for(item of arr) {
        console.log(item);
    }
}

arrList();

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
];

function callDogs() {
    //console.log(dogArray);
    for(dog in dogArray) {
        console.log(dogArray[dog])
        console.log(`${dogArray[dog]} is in spot ${dog}`);
    }
}

callDogs();