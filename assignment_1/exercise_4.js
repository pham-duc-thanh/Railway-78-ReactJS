// Exercise 4: Scope, Closure
/**
 * Question 1: Scope
Khai báo biến fullName và function hello() để in ra fullName theo 3
cách
a) Khai báo fullName là Global scope
b) Khai báo fullName là Function scope
c) Khai báo fullName là Lexical Scope
 */
// Global scope
var fullName1 = "Phạm Đức Thanh";
function hello1() {
    console.log("FullName1 l\u00E0: ".concat(fullName1));
}
;
hello1();
// Function scope
var fullName2 = "Lê Long An";
function hello2() {
    var fullName2 = "Lê Long An";
    console.log("FullName2 l\u00E0: ".concat(fullName2));
}
;
hello2();
// Lexical Scope
function hello3() {
    var fullName3 = "Nguyễn Văn A";
    function children() {
        console.log("FullName3 l\u00E0: ".concat(fullName3));
    }
    ;
    children();
}
hello3();
/**
 * Question 2: Reference Function
Khai báo 1 function printName() và in ra tên của bạn.
Gán function printName và 1 variable có tên là myName, sau đó sử
dụng variable myName để in ra tên của bạn
 */
function printName() {
    var myName = "Thanh";
    console.log("Name l\u00E0:  ".concat(myName));
}
;
printName();
/**
 * Question 3: Closure
Khai báo 1 function getGreeting() có 2 tham số firstName, lastName.
Bên trong function khai báo 1 inner function greeting() trả về
firstName + lastName
Sử dụng getGreeting() function để in ra tên của bạn
 */
function getGreeting(firstName, lastName) {
    function greeting() {
        return firstName + " " + lastName;
    }
    return greeting();
}
console.log(getGreeting("Phạm", "Thanh"));
/**
 *
 * Question 4: Closure & Loop
Viết 1 vòng for, mỗi 1 giây in ra từng số 1 2 3 4 5 6

 */
setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
            setTimeout(function () {
                console.log(4);
                setTimeout(function () {
                    console.log(5);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
/**
 * Question 5: Ứng dụng
Sử dụng Closure để làm function factory cho phép toán bình phương
hoặc căn bậc 2

 */
function calculate() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    if (arguments.length === 1) {
        return Math.sqrt(rest[0]);
    }
    else if (arguments.length === 2) {
        return Math.pow(rest[0], rest[1]);
    }
}
// In ra căn bậc 2
console.log(calculate(16));
// In ra bình phương
console.log(calculate(3, 2));
/**
 * Question 6:
Sử dụng Closure để tạo object person có các attribute id, name với điều
kiện id là auto increment, và tạo getter, setter cho từng attribute
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.id = Person.auto_increment_id++;
        this.name = name;
    }
    // getter và setter 
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setId = function (value) {
        this.id = value;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    Person.auto_increment_id = 1;
    return Person;
}());
var person1 = new Person("Thanh");
var person2 = new Person("Long");
var person3 = new Person("An");
console.log("person1: Id l\u00E0 ".concat(person1.getId(), " v\u00E0 Name l\u00E0 ").concat(person1.getName()));
console.log("person2: Id l\u00E0 ".concat(person2.getId(), " v\u00E0 Name l\u00E0 ").concat(person2.getName()));
console.log("person3: Id l\u00E0 ".concat(person3.getId(), " v\u00E0 Name l\u00E0 ").concat(person3.getName()));
