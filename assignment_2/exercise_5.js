
// Exercise 5: Parameter

/**
 * Question 1: khai báo 1 function multiply() có 2 tham số a,b. Và có b có 
default value
Kết quả:
multiply(5,3)  15
multiply(5)  5
 */

const multiply1 = (a, b) => a * (b||1);

console.log('multiply1:', multiply1(5));
console.log('multiply1:', multiply1(5, 3));




/**
 * Question 2: khai báo 1 function multiply() có tham số không giới hạn 
Kết quả:
3
multiply(5)  5
multiply(5,3)  15
multiply(5,3,2)  30
 */

const multiply2 = (...rest) => rest.reduce((acc, value) => (acc * value), 1)
console.log('multiply2:', multiply2(5,4));
console.log('multiply2:', multiply2(5,3,2));




/**
 * Question 3: khai báo 1 function printInformation() có 2 tham số name, email. 
Và có email là optional parameter
Kết quả:
printInformation("Nam","Namvv20@gmail.com") 
 tôi là Nam. Email của tối là Namvv20@gmail.com
printInformation("Nam")
 tôi là Nam. Tôi chưa có Email
 */

var printInformation = (name, email = 'tôi là Thanh. Tôi chưa có Email.') => {

    console.log('Name:', name);
    console.log('Email:', email);
}

printInformation('Thanh', 'thanh123@gamil.com');
printInformation('Thanh');