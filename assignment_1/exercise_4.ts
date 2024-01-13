
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
var fullName1: string = "Phạm Đức Thanh";

function hello1() {
    console.log(`FullName1 là: ${fullName1}`); 
};

hello1();


// Function scope

var fullName2: string = "Lê Long An";

function hello2() {
    
    var fullName2: string = "Lê Long An";

    console.log(`FullName2 là: ${fullName2}`);
};

hello2();


// Lexical Scope

function hello3() {
    var fullName3: string = "Nguyễn Văn A";

    function children() {
        console.log(`FullName3 là: ${fullName3}`);
    };

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
    console.log(`Name là:  ${myName}`);  
};

printName();



/**
 * Question 3: Closure
Khai báo 1 function getGreeting() có 2 tham số firstName, lastName.
Bên trong function khai báo 1 inner function greeting() trả về 
firstName + lastName
Sử dụng getGreeting() function để in ra tên của bạn
 */

function getGreeting(firstName: string, lastName: string) {

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

setTimeout(function() {
    console.log(1);

    setTimeout(function() {
        console.log(2);

        setTimeout(function() {
            console.log(3);

            setTimeout(function() {
                console.log(4);

                setTimeout(function() {
                    console.log(5);
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);



/**
 * Question 5: Ứng dụng
Sử dụng Closure để làm function factory cho phép toán bình phương 
hoặc căn bậc 2

 */

function calculate(...rest: any) {
    if (arguments.length === 1) {
        return Math.sqrt(rest[0]);
    } else if (arguments.length === 2) {
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

class Person {

    private static auto_increment_id: number = 1;

    private id: number;
    private name: string

    constructor(name: string) {
        this.id = Person.auto_increment_id++;
        this.name = name;
    }

    // getter và setter 

    public getId() {
        return this.id;
    }

    public setId(value: number) {
        this.id = value
    }

    public getName() {
        return this.name;
    }

    public setName(value: string) {
        this.name = value
    }
}

var person1 = new Person("Thanh");
var person2 = new Person("Long");
var person3 = new Person("An");

console.log(`person1: Id là ${person1.getId()} và Name là ${person1.getName()}`);
console.log(`person2: Id là ${person2.getId()} và Name là ${person2.getName()}`);
console.log(`person3: Id là ${person3.getId()} và Name là ${person3.getName()}`);






