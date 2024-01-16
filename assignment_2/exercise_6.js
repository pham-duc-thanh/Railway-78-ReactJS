
// Exercise 6: Callback

/**
 * Exercise 5: Callback
Question 1: Viết callback thực hiện các lệnh sau
B1: Call API Create User (1)
B2: Nếu (1) thành công thì Call API Create Group (2)
 Nếu (1) lỗi thì in ra lỗi và in ra text "End!"
B3: Nếu (2) thành công thì Call API Add User To Group (3)
 Nếu (2) lỗi thì in ra lỗi và in ra text "End!"
B4: Nếu (3) thành công thì in ra text "End!"
Chú ý: Sử dụng setTimeout() để mô phỏng Call API
 */

// Bước 1
const callApiCreateUser = (callback_1) => {

    
    console.log("Call API Create User");

    setTimeout(() => {
        const isSuccess = true;
        if(isSuccess) {
            console.log("Call API Create User is Success!");
            callback_1("");
        } else {
            const err = "Error: khi gọi API của User";
            console.log(err);
            console.log("end");
            callback_1(err);
        }
    }, 1000)
}


// Bước 2
const callApiCreateGroup = (callback_2) => {

    console.log("Call API Create Group");

    setTimeout(() => {
        const isSuccess = true;
        if(isSuccess) {
            console.log("Call API Create Group is Success!");
            callback_2("");
        } else {
            const err = "Error: khi gọi API của Group";
            console.log(err);
            console.log("end");
            callback_2(err);
        }
    }, 1000)
}


// Bước 3
const callApiAddUserToGroup = (callback_3) => {

    console.log("Call API Add User To Group");

    setTimeout(() => {
        const isSuccess = true;
        if(isSuccess) {
            console.log("Call API Add User To Group is Success!");
            callback_3("");
        } else {
            const err = "Error: khi gọi API thêm User vào Group";
            console.log(err);
            console.log("end");
            callback_3(err);
        }
    }, 1000)
}


// TIẾN HÀNH TOÀN BỘ QUÁ TRÌNH
    const callbacks = () => {
        callApiCreateUser((para1) => {
            if(!para1) {
                callApiCreateGroup((para2) => {
                    if(!para2) {
                        callApiAddUserToGroup((para3) => {
                            if(!para3) {
                                console.log('End!');
                            }
                        })
                    }
                })
            }
        })
    }


    // GỌI HÀM
    callbacks();



