// Exercise 1: Destructuring

/**
 * Question 1:
Khai báo date có dạng như sau: 
var date: number[] = [2020,12,08];
Hãy lấy ra year, month, day của date và in ra
 */

var date = [2020, 12, 8];

var [a, b, c] = date;

console.log(`year: ${a}`);
console.log(`month: ${b}`);
console.log(`year: ${c}`);


/**
 * Question 2:
Khai báo fullname có dạng như sau
const person = {
firstName: "nguyen", 
lastName: "a", 
age: 20
};
Hãy lấy ra firstName, lastName, age của persn và in ra
 */

const person = {
    firstName: "nguyen", 
    lastName: "a", 
    age: 20
    };


var {firstName, lastName, age} = person;

console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);
console.log(`age: ${age}`);