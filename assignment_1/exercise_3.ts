

// Exercise 3 (Optional): Flow Control & Operator

/**
Question 1: 
Khai báo 1 array có các chữ từ "a" tới "e"
Hãy in ra các element trong array theo
 Index
 Value
 */


// Cách 1

var array: string[] = ['a', 'b', 'c', 'd', 'e'];

var elementArray = array.forEach(function(value, index, arr) {
    console.log("index:", index);
    console.log("value:", value);
    
});


// cách 2

var arr = ["a", "b", "c", "d", "e"];

for(var i = 0; i < arr.length; i++) {
    console.log({
        index: i,
        value: arr[i]
    });
}