// Object Oriented Programming: Understand the Prototype Chain

/*
1. All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

2. Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype

the prototype of Bird.prototype is Object.prototype:
Object.prototype.isPrototypeOf(Bird.prototype); // returns true

let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true

1. The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck.

2. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype

3. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

*/

function Dog(name) {
	this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

console.log(Object.prototype.isPrototypeOf(Dog.prototype));
