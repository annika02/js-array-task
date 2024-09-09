// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ['apple', 'orange', 'grape', 'dragonFruit', 'banana'];
console.log(fruits[3]);
fruits[2] = 'jambura'
console.log(fruits);

// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const destinations = ['Maldives','Bali','Pataya']
destinations.push('Banddorbon');
console.log(destinations);
destinations.unshift('Dubai','Sydney');
console.log(destinations);
destinations.pop();
console.log(destinations);



// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const books = ['Bangla', 'English','Chemistry','Physics'];
if (books.includes('javascript')) {
    console.log("The array contains a 'javascript' book.");
} else {
    console.log("The array does NOT contain a 'javascript' book.");
}books.includes('javascript');

// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

// Array variables
let numbers = [1, 2, 3, 4, 5];
let colors = ['red', 'green', 'blue'];

// Non-array variables
let age = 25;         // Number
let name = 'John';    // String
let isStudent = true; // Boolean

console.log(Array.isArray(numbers));
console.log(Array.isArray(colors));
console.log(Array.isArray(age));
console.log(Array.isArray(name));
console.log(Array.isArray(isStudent));

// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

let numbers1 = [1, 2, 3, 4, 5];
let colors2 = ['red', 'green', 'blue'];

const combinations = numbers1.concat(colors2);
console.log(numbers1);
console.log(colors2);
console.log(combinations);