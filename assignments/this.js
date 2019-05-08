/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding; Which pretty much refers to the main window, or 'global scope'.
* 2. Implicit Binding; When a function is called 'this.example', this would be the 'Object' and 'example' would be the 'function'. 
* 3. New Binding; Which refers to the creation of a 'new' object within a constructor function.
* 4. Explicit binding; Which refers to when an apply() or call() method is used, 'this' us explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function greeting(name) {
    console.log(`Hello ${this}`);
    return greeting;
}

greeting('Jason');

// code example for Window Binding

// Principle 2

const helloWorldFunction = message => {
    message.hello = function() {
        console.log(`Hello ${this.name}`);
        console.log(this);
    };
};
helloWorldFunction('Jason');

// code example for Implicit Binding

// Principle 3

function greetPerson(person) {
    this.greeting = 'Hello ';
    this.person = person;
    this.speak = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    }
}
const jason = new greetPerson('Jason');
const amelia = new greetPerson('Amelia');

// code example for New Binding

// Principle 4

function product(name, price) {
    this.name = name;
    this.price = price;
}

function electronics(name, price) {
    product.call(this, name, price);
    this.category = 'Electronics';
}

function groceries(name, price) {
    product.call(this, name, price);
    this.category = 'Groceries';
}

const phones = [
    new electronics('iPhone XS', 1199),
    new electronics ('iPhone XR', 799),
    new electronics('Galaxy S10', 1099)
]

const fruits = [
    new groceries('red apple', 2),
    new groceries('grapes', 3),
    new groceries('lettuce', 9)
]

console.log(phones);
console.log(fruits);

// code example for Explicit Binding