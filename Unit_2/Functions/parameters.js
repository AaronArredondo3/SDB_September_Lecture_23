//! Parameters and Arguments
/* 
                (1)
    function hi(name) {
        console.log(`Hi, &{name}`)
                            (2)
    }
        (3)
    hi("Bruce");

    1: The Parameter(s) that the function is accepting or holding.
    2: Using string interpolation, we can refer to the parameter that was given to the function.
    3: This is where we define what the parameter's value will be.
        -Known as an argument
*/

function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}!`);
}

order('cheese pizza'); //I exchanged my ticket for a cheese pizza!
order('burger'); // I exchanged my ticket for a burger!
order('milk shake'); // I exchanged my ticket for a milk shake!

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function firstLast(firstName, lastName) {
    let fullName = firstName + " " + lastName
    console.log(`Hello, my name is ${fullName}`);
}

firstLast('Aaron', "Arredondo");
firstLast('Jackie', "Chan");
firstLast('Kaylie', "Arredondo");


