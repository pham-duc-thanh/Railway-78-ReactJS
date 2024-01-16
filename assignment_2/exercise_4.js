
// Exercise 4: Arrow function

/**
 * Question 1: 
Convert function sau về Arrow Function ngắn nhất có thể theo các 
bước sau:
B1: Ko có keyword function
B2: Không có dấu {} và keyword return trong function body
B3: Không có dấu ngoặc ở argument 
 */

var sum = a => a + 100;

console.log("sum:", sum(5));



/**
 * Question 2: 
Convert function sau về Arrow Function ngắn nhất có thể:
 */

// câu a)
const sum1 = (a, b) => a + b + 100;

console.log('sum1:', sum1(10, 20));

// câu b)

const sum2 = (a1, b1) => a1 + b1 + 42;

console.log('sum2:', sum2(20, 30));

// câu c)
const bob = a => a + 100;

console.log('bob:', bob(50));