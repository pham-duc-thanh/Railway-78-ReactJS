
// Exercise 2 (Optional): Datatype Casting

/**
 * Question 1:
Khai báo 2 số lương có kiểu dữ liệu là float.
Khởi tạo Lương của Account 1 là 5240.5 $
Khởi tạo Lương của Account 2 là 10970.055$
Khai báo 1 số int để làm tròn Lương của Account 1 và in số int đó ra
Khai báo 1 số int để làm tròn Lương của Account 2 và in số int đó ra
 */

class Account1 {
    salary: number;
    name: string;

    constructor(name: string, salary: number) {
        this.salary = salary;
        this.name = name;
    }
}

var account1 = new Account1("salary1", 5240.5);
console.log(Number.parseInt(account1.salary.toString()));

var account2 = new Account1("salary2", 10970.055);
console.log(Number.parseInt(account2.salary.toString()));



/**
 * Question 2:
Lấy ngẫu nhiên 1 số có 5 chữ số (những số dưới 5 chữ số thì sẽ thêm 
có số 0 ở đầu cho đủ 5 chữ số)
 */
var array =  Array.from({length: 5}).map(function() {
    var randomNum = Math.round(Math.random() * 10);
    return randomNum >= 10 ? 0 : randomNum;
});

console.log("myArr2 là:", array.join(""));



/**
 * Question 3: 
Lấy 2 số cuối của số ở Question 2 và in ra.
Gợi ý: 
Cách 1: convert số có 5 chữ số ra String, sau đó lấy 2 số cuối
Cách 2: chia lấy dư số đó cho 100
 */

var number: any = array.join("");

var sodu = number % 100;

console.log("Số dư:", sodu);
