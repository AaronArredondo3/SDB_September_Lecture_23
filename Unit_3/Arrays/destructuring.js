//! Array Destructuring 
/* 
    - Syntax is on the lft side of assignment operator, the syntax is what is inside a []
    - Great for pulling info out of an and assigning data to it's own variable.

*/

const fullName = ['Jane', 'Doe'];

//const fName = fullName[0];
//const lName = fullName[1];

const [firstName, lastName] = fullName; //* this is using destructuring method, the variable inside the [] takes the same position as in the array. for example firstName is in the same position as 'Jane'
console.log(firstName, lastName);

console.log(`Hello Mrs. ${lastName}`);


//! Spread
/* 
    - denoted by three consecutive periods: ....
    - pulls out all elements of an array and gives them to you as a standalone list of elements.

* Concept of the spread operator - NOT syntax

const fullName = [ 'Rocket', 'Raccoon'];

...fullName // 'Rocket', 'Racoon'

const elements = ...fullName;

*/

const copiedFullName = [...fullName];
//const copiedFullName =[fullName]          //* if you don't use the 3 periods it comes back as an array within an array example: [['Jane', 'Doe']]
console.log(copiedFullName);

fullName.push('Mrs.');
console.log(fullName, copiedFullName);

//* console.log(Math.min(1,5,-3)); comes back as -3 because its the smallest number in that

const prices = [ 10.9, 5.99, 3.99, 6.59];
//* console.log(Math.min(prices)); Comes back as NAN because the elements in the array need to be separated, a number is not an array!
console.log(Math.min(...prices)); //* Using the spread operator, so this way it comes back as 3.99 as the smallest value in the array

//! Rest is the opposite of the spread method. Instead of separating the elements it brings them together or condenses them.
const fullName2 = ['Jane', 'Doe', 'Mrs.', {month: 3, date: 22, year: 1973}, 
'testOne', 2, 'test3', 4, true, false ]; 


const [ fName, lName, , , ...otherInfo ] = fullName2; // 3 commas: skips data
console.log(fName);
console.log(lName);
console.log(otherInfo);

const [,,,birthday] = fullName2;
console.log(birthday); // just captures the info inside the curly brackets