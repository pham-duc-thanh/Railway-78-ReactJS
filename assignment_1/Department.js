"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDepartment = exports.department1 = exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    // getter && setter Id
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.setId = function (value) {
        this.id = value;
    };
    // getter && setter Name
    Department.prototype.getName = function () {
        return this.name;
    };
    Department.prototype.setName = function (value) {
        this.name = value;
    };
    return Department;
}());
exports.Department = Department;
exports.department1 = new Department(1, "Phạm Đức Thanh");
function printDepartment(d) {
    console.log('id:', d.getId());
    console.log('id:', d.getName());
}
exports.printDepartment = printDepartment;
;
// printDepartment();
// export {Department, department1, printDepartment}
