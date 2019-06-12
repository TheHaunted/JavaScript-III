/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When outside of a function, 'this' refers to the window object.
* 2. The object before the dot on methods is what 'this' refers to.
* 3. When 'new' is used to create a new object, 'this' refers to that object.
* 4. When using '.call' or '.apply', 'this' must be explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hw(){
    console.log(this);
    return 'hello world';
}
hw()
Principle 2

// code example for Implicit Binding
const student = {
    "name": "Kevin",
    "cohort": "Web21",
    sayHello: function(){
        console.log(`${this.name} says hello.`);
    }
}
student.sayHello();
// Principle 3

// code example for New Binding
function Person(name){
    this.name = name;
    this.greet = function(){
        console.log(`My name is ${name}.`);
    }
}
const jeff = new Person('Jeff');
jeff.greet();
// Principle 4

// code example for Explicit Binding

function sayBye(){
    console.log(`${this.name} says bye.`);
}
sayBye.call(jeff);