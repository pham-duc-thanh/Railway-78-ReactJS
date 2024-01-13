// Exercise 5: Variable (var-let-const)
/**
 * Question 1:
Ta có variable name và 1 function printName
a) Hãy khai báo name là var và có scope là global
b) Hãy khai báo name là var và có scope là local
c) Hãy thử thay đổi giá trị của name xem được không?
 */
// câu a) Khai báo name có scope là Global
var name1 = "Thanh";
{
    name1 = "An";
    console.log(name1);
}
// câu b) Khai báo name có scope là Local
{
    var name2 = "Nguyễn Văn A";
    name2 = "Nguyễn Văn B";
}
console.log(name2);
// câu c)
console.log("\nKhi d\u00F9ng t\u1EEB kh\u00F3a Var \u0111\u1EC3 khai b\u00E1o bi\u1EBFn v\u1EDBi \nGlobal v\u00E0 Local th\u00EC c\u00F3 th\u1EC3 thay \u0111\u1ED5i gi\u00E1 tr\u1ECB \u1EA1!\n");
/**
 * Question 2:
Ta có variable name và 1 function printName
a) Hãy khai báo name là let và có scope là global
b) Hãy khai báo name là let và có scope là local
c) Hãy thử thay đổi giá trị của name xem được không?

 */
// câu a) khai báo Let với Global
var name3 = "name3";
{
    name3 = "Tôi là name3";
    // console.log(name3); 
}
console.log(name3);
// câu b) khi báo Let với Local
{
    var name4 = "name 4";
    name4 = "Tôi là name4";
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
var name5 = "name5";
{
    console.log(name5);
}
// câu b)
{
    var name6 = "name6";
    console.log(name6);
}
// câu c)
console.log("\n\nkhi d\u00F9ng t\u1EEB kh\u00F3a Const th\u00EC kh\u00F4ng th\u1EC3 thay \u0111\u1ED5i gi\u00E1 tr\u1ECB\n");
/**
 * Question 4:
Hãy khai báo 1 array const numbers có chứa các số 1 2 3.
Sau đó add thêm 4 vào array numbers.
Hãy giải thích tại sao const ở Question 3 không thể thay đổi name mà
array numbers ở Question 4 lại có thể add được thêm element
 */
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
