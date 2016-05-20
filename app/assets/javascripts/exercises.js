
// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:
//
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!
//
// Hint: Use a for loop!
// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
//
// Write some code that prints all the numbers in the 'numbers' array to the console.
//
// Hint: Use a for loop!
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
//
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!
// var sum = 0
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
//
// for (var i = 0; i < numbers.length; i++) {
//  sum += numbers[i];
// }
//
// console.log("Average:",  sum / numbers.length);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!
// for (var i = 1; i <= 100; i++) {
//   if (i % 15 == 0){
//     console.log("FizzBuzz")
//   }else if (i % 5 == 0){
//     console.log("Buzz")
//   }else if (i % 3 == 0){
//     console.log("Fizz")
//   }else{
//     console.log(i)
//   }
// }
// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");
// var numberToGuess = Math.floor((Math.random() * 100) + 1);
// for (var numberOfTries = 0; numberOfTries <= 10; i++) {
//   var guess = prompt("Guess a number between 1 to 100");
//
//   if(guess == numberToGuess){
//     console.log("win");
//     break;
//   }else if(guess < numberToGuess){
//     console.log("pick higher");
//   }else if(guess > numberToGuess){
//     console.log("pick lower");
//   }
// }

// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.
// function sum(p1, p2) {
//     return p1 + p2;
// }
// console.log(sum(4,3));

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)
// function average(array){
//   var sum = 0
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return (sum / numbers.length);
// }
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// console.log(average(numbers))

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.
// var book = {
//   title:"Red Riding Hood",
//   author:"Awesome Person",
//   isbn:"ISBN2323424234",
//   pages:"100",
//   year:"1986",
//   printMessage: function() {
//     console.log(this.title);
//     console.log(this.author);
//     console.log(this.isbn);
//     console.log(this.pages);
//     console.log(this.year);
//   }
// };
// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information
// book.printMessage()
// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html
