
// Exercise 2: Template String


/**
 * Question 1:
Tạo String có nội dung như sau:
"Tôi tên là ???, năm nay ??? tuổi, đang ế!"
Với 2 variable là fullName và age. Hãy tạo template String và điền vào 
tên của bạn
 */

var fullName = "Phạm Đức Thanh";
var age = 27;

console.log(`Tôi tên là ${fullName}, năm nay ${age} tuổi, đang ế!`);



/**
 * Question 2:
Khai báo 2 số a = 5, b = 20. In ra câu sau:
"Tổng của {a} và {b} là {a+b}"
 */

var a = 5;
var b = 20;

console.log(`Tổng của ${a} và ${b} là ${a+b}`);



/**
 * Question 3: 
Sử dụng template string để in ra hình như sau
 */

console.log(
    `
    1. CHẢ GIỜ NÓN lÁ 
    2. BÒ LÚC LẮC HẠC ĐIỀU
    3. CÁ TAI TƯỢNG CHIÊN XÙ
    4. CẢI THÌA SỐT THỊT CUA 
    5. CƠM CHIÊN CÁ MẶN
    6. LẨU HẢI SẢN
    7. RAU CÂU
    `
);