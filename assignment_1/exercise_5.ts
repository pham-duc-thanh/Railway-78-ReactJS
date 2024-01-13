
// Exercise 5: Variable (var-let-const)

/**
 * Question 1: 
Ta có variable name và 1 function printName
a) Hãy khai báo name là var và có scope là global 
b) Hãy khai báo name là var và có scope là local 
c) Hãy thử thay đổi giá trị của name xem được không?
 */

// câu a) Khai báo name có scope là Global

var name1: string = "Thanh";

{
    name1 = "An"

    console.log(name1);
}




// câu b) Khai báo name có scope là Local

{
    var name2: string = "Nguyễn Văn A";

    name2 = "Nguyễn Văn B"
}

console.log(name2);


// câu c)
console.log(`
Khi dùng từ khóa Var để khai báo biến với 
Global và Local thì có thể thay đổi giá trị ạ!
`);




/**
 * Question 2: 
Ta có variable name và 1 function printName
a) Hãy khai báo name là let và có scope là global 
b) Hãy khai báo name là let và có scope là local 
c) Hãy thử thay đổi giá trị của name xem được không?

 */

// câu a) khai báo Let với Global

let name3 = "name3"

{
    name3 = "Tôi là name3"
    // console.log(name3); 
}

console.log(name3); 

// câu b) khi báo Let với Local
{
    let name4 = "name 4";

    name4 = "Tôi là name4"
    console.log(name4);
}

// console.log(name4); khi muốn in ra ngoài khối Block này thì không được 




/**
 * Question 3:
Ta có variable name và 1 function printName
a) Hãy khai báo name là const và có scope là global 
b) Hãy khai báo name là const và có scope là local 
c) Hãy thử thay đổi giá trị của name xem được không?
 */

// câu a) 
const name5 = "name5";

{
    console.log(name5);  
}

// câu b)
{
    const name6 = "name6";
    console.log(name6);
}

// câu c)
console.log(`

khi dùng từ khóa Const thì không thể thay đổi giá trị
`);



/**
 * Question 4:
Hãy khai báo 1 array const numbers có chứa các số 1 2 3.
Sau đó add thêm 4 vào array numbers.
Hãy giải thích tại sao const ở Question 3 không thể thay đổi name mà 
array numbers ở Question 4 lại có thể add được thêm element
 */

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);
