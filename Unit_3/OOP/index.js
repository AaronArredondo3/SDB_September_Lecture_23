//! Object Oriented Programming
/* 
    - JavaScript has both Functional and Procedural aspects.
        - It's a multi-paradigm language.
    - Core Concepts of OOP:
        - Encapsulated Data and behavior through an exposed interface
        - Allow for inheritance of behavior
        - Abstraction of complexity
        - Polymorphism of behavior
*/

/* 
* Encapsulation
    - set of data within an object
        - properties / methods
*/

class Pet { 
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // speak() { // this is a method!
        // return `${this.name} says, 'woof!` // this is the function that will take place
    //}
    // speak() { // this is a method!
        // return `${this.name} says, ${this.voice}` // this is the function that will take place
    // }

    fly() {
        return `${this.flies},'takes to the skies!'`
    }
}

// let buttons = new Pet('Buttons', 'brown');
// console.log(buttons.speak()); // Buttons say, woof!

/* 
* Inheritance
A child class can gain (inherit) properties from a parent class.
*/

class Dog extends Pet {

    constructor(name, color, voice) {
        super(name, color); // this sets which properties we inherit from the parent
        this.voice = voice;
    }

    speak() { // this is a METHOD
        return `${this.name} says, ${this.voice}`
    }
}

let buttons = new Dog('Buttons', 'brown', 'ruff!');
// console.log(buttons.speak()); // Buttons says, ruff!

class Cat extends Pet {
    constructor(name, color, voice) {
        super(name,color);
        this.voice = voice;
    }
}

let mayo = new Cat('Mayo', 'black', 'Meow!'); // creating a new object!
// console.log(mayo); 
// console.log(mayo.speak()); // calls upon the method we set inside the very first Pet class at the top.

class Bird extends Pet {
    constructor(name, color, flies) {
        super(name,color);
        this.flies = flies;
    }
}

let pete = new Bird ('Pete', 'red', 'true');
// console.log(pete);
console.log(pete.fly());


/* 
* Abstraction
Hide complexity via an objects methods
*/

class Tab {
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip;
    }

    tipAmount(x) { // THIS IS A METHOD!
        let total = this.subtotal + this.tax;

        this.tip = (total * x); // assigning the value for the key "this.tip" with this 
        let final = total + this.tip;
        return final.toFixed(2);
    }
}

let saleTax = 0.075;
let tipPercent = .2;

let dinnerBill = new Tab(42.83, saleTax);

function calcTip(bill) {
    return(bill.tipAmount(tipPercent));
}

// console.log(`Final Cost: $${calcTip(dinnerBill)}`); // Final Cost: $51.49
// console.log(`with a tip of $${dinnerBill.tip.toFixed(2)}`); // with a tip of $8.58

/* 
* Polymorphism
    - How objects respond in relationship from child to parent.
        - ex: same methods
    - "Siblings" cannot respond to each other's methods / properties
        - unless shared with the parent.
    - Perform a single action in different forms
        - when a method is called from a child but is a method that is within a parent.
*/

class A {
    // show(){ // method!
        // console.log("From A");
    // }
}

class B extends A {}

let b = new B(); // creating a new object
// b.show();  // From A

/* 
! Challenge
    - Create a bird class that extends pets. - Done
    - Provide it a new key property called "flies" that will hold a boolean value.
    - Create a method within the parent class called "fly" that checks to see if our object can fly and returns as such: - Done
        If so: "{pet} takes to the skies!"
        If not: "{pet} can only gaze upward..."

    - Create a new bird. (give whatever values to its attributes)
        - hint: makes sure it is "true" that it can fly.
    - Within a console.log(), check the fly method of the new bird and another using either the dog or cat just created.
*/

// class Bird extends Pet {
    // constructor(name, color, flies) {
        // super(name,color);
        // this.flies = flies;
    // }
//}

// let pete = new Bird ('Pete', 'red', 'true');
// console.log(pete);
// console.log(pete.fly());