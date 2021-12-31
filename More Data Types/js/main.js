// alert("JS file is linked!");

// DATA TYPES

// // 1. STRING:

// let studentName = 'Tom';
// let course = "JavaScript";
// let classroom = `Computer Lab`; // This is known as a Template Literal or Template String
// let studentAge = '28'; // String can look like a number

// // String Concatenation:
// console.log(studentName + ' is studying ' + course + ' in the ' + classroom);

// // String Interpolation:
// let favCourse = `${studentName} likes to study ${course} in the ${classroom}`;
// console.log(favCourse);

// // 2. NUMBER:

// let topStudentAge = 36;
// let avgStudentAge = 32.164;

// console.log(topStudentAge);
// console.log(avgStudentAge);

// // JS Arithmatic Operators:

// // Addition
// console.log(10 + 4);

// // Subtraction:
// console.log(10 - 4);

// // Division:
// console.log(10 / 4);

// // Multiplication:
// console.log(10 * 4);

// // Modulus:
// console.log(10 % 4); // Gives you the remainder

// // TYPEOF Operator:
// console.log(typeof studentName); // Gives us the string representation of the type of data in the operand

// console.log(typeof avgStudentAge);

// let addAges = studentAge + topStudentAge;
// console.log(addAges);
// console.log(typeof addAges); // Converts it to a string and joins the values together similar to concatenation.

// console.log(topStudentAge + avgStudentAge); // Adds them mathematically and returns 68.164




// VIDEO 5!!!! MORE DATA TYPES!

/*
Primitive Data Types ===========================================================
There are two main categories of data types in JavaScript: primitives and
objects. Objects are complex so we will cover them later but primitives are
basically data types which are not objects and are very simple.

There are 7 primitive data types in JavaScript


/*
  3. Boolean
  Booleans are just a way of creating switches that can turn settings on or off.
  They can only be either true or false.
*/

let isSleeping = true;
let isAwake = false;

// The typeof Operator is used to check the data type of a piece of data.
console.log(typeof isSleeping); // boolean

//  Booleans are also used for conditional testing such as:
let a = 7;
let b = 2;
let c = 7;
console.log(a == b); // false
console.log(a == c); // true


/*
  4. Null
  A null is a totally empty and meaningless value.
  A null either hasn't been set or is not applicable in a given context.
*/

let myEmptyVar = null;
console.log(myEmptyVar);  // null
console.log(typeof myEmptyVar); // Nulls are returned as "object" which is a known bug in JS



/*
  5. Undefined
  Undefined data types are what they sound like - undefined variables
*/

let nothing; // undefined
console.log(nothing);  // null

let explicitNothing = undefined;



console.log(typeof nothing); // undefined


/*
  6. SYMBOL

  Symbols are an ES6 data type which are used as unique identifiers
  They are created using the Symbol function, which creates a new symbol
  Symbols cannot be changed (immutable) and are unique
*/


  // READ: Let's create a new Symbol:

  let myUniqueSymbol = Symbol("Rubber Duck");
  console.log(myUniqueSymbol);  // Symbol(Rubber Duck)
  console.log(typeof myUniqueSymbol);  // symbol

  // You can use the symbol.description property to get its description
  console.log(myUniqueSymbol.description);  // Rubber Duck


  let newSymbol = Symbol("Rubber Duck");
  console.log(myUniqueSymbol === newSymbol); // false (symbols are always unique regardless of the description)

  // A symbol is never equal to anything else except itself
  console.log(newSymbol === newSymbol); // true

  let myFirstSymbol = Symbol();
  console.log(myFirstSymbol.description); // undefined

      
  let mySecondSymbol = Symbol('My Unique Symbol');

  // let mySecondSymbol = Symbol('Something new');  // Identifier 'mySecondSymbol' has already been declared

  // READ:  Lastly, Symbols don't auto-convert to a string. (Most value in JS implicitly convert to a string):

  // alert(mySecondSymbol); // Uncaught TypeError: Cannot convert a Symbol value to a string
  alert(mySecondSymbol.toString());  // Alerts the message: Symbol(My Unique Symbol)



/*
7. BigInt

BigInt allows us to represent integer values that are very large.  
The Number Data Type in JS can precisely represent numbers up to the Number.MAX_SAFE_INTEGER which equals 9007199254740991 (2^53 - 1).
We lose precision when a number is greater than this.


*/

// Unexpected rounding of large numbers occurs without using BigInt making our code unreliable and less secure. 
console.log(999999999999999999);    // → 10000000000000000


// notice the last digit is different
console.log(9007199254740992 === 9007199254740993); // yet it outputs true thus it's not precise


// To create a BigInt, we append n to the end of an integer

console.log(9007199254740995n);    // → 9007199254740995n  (maintains the correct value)
console.log(9007199254740995);     // → 9007199254740996   (not precise and rounds up)

// We can also call the BigInt() constructor:
// BigInt("9007199254740995");
console.log(BigInt("9007199254740995"));    // → 9007199254740995n

// Lastly, it's important to nte that we cannot use the strict equality operator (===) to compare a BigInt to a Number because they are different Data Types!
console.log(77n === 77);    // false

console.log(typeof 77n);    // bigint
console.log(typeof 77);     // number

