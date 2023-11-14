/* 
    CONDITIONALS
    - It's a way for us (as devs) to ask a question and provide and response depending on the condition of what we're asking.
    - Devs == Inventors: we design and ask the question but also determine the answer options.
    - Conditionals focus on a thing being true or being false.
    - Evaluates an expression and responds if it is true.
        - Falsy
            - false
            - 0
            - empty strings
            - null
            - undefined
            - NaN (not a number
*/

// IF Conditional Statements

let isOn = true;

if (isOn == true) {
    console.log('The light is on in the room!'); // The light is on in the room!
};

/* 
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

if (isOn){
    console.log('The light is on, heck yeah!')
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off...')
}

let weather = 68;

if (weather < 70) {
    console.log('Some might need to grab a jacket.')
}

// IF Else Conditional Statement

// let temp = 60; // I will grab a sweater.

let temp = 75;

if (temp < 70) {
    console.log('I will grab a sweater.')
} else {
    console.log('Oh boy it is shorts weather!')
}

// AND, &&, check to see if both are equal

let username = 'myUsername';
let password = '1234'; // to see false ele statement run, change pass

if ( username == 'myUsername' && password == '1234') {
    console.log('Welcome user! You are signed in.')
}else {
    console.log('Login error, begone!')
}

// OR, ||, check if one statement is true or the other.

let email = 'myemail@email.com';
let uName = 'coolCat100';

if ( email == 'myemail@email.com' || uName == 'coolCat100') {
    console.log('Welcome user!')
} else {
    console.log('Login info was incorrect.')
}

// NOT, !

//let rain = true; // nothing in the console
let rain = false;

if (!rain) {
    console.log('It is a dry day!')
}

if (rain != true) {
    console.log('It is a dry sunny day!')
}

// ELSE IF Conditional Statement
// This can let us check more than one condition/choice (asking multiple questions)
// Once one of the conditions is met (results in true) it will exit the statement/code block
// All start with IF!

// let grade = 92; // This is grade is passing! Great Job!
// let grade = 70; // Not quite passing, reach out to the teacher.
// let grade = 50; // Needs to be reworked and resubmitted.

if (grade >= 75) {
    console.log('This is grade is passing! Great Job!')
} else if (grade >= 69) {
    console.log('Not quite passing, reach out to the teacher.')
} else {
    console.log('Needs to be reworked and resubmitted.')
}
