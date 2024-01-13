// Ex1: Datatype
// Department
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.departmentId = id;
        this.departmentName = name;
    }
    // getter & setter Id
    Department.prototype.getId = function () {
        return this.departmentId;
    };
    Department.prototype.setId = function (value) {
        this.departmentId = value;
    };
    // getter & setter Name
    Department.prototype.getName = function () {
        return this.departmentName;
    };
    Department.prototype.setName = function (value) {
        this.departmentName = value;
    };
    return Department;
}());
;
// Khởi tạo 3 đối tượng
var department1 = new Department(1, "Sale");
var department2 = new Department(2, "Marketing");
var department3 = new Department(3, "Giám đốc");
// In ra 1 đối tượng
// Position
var positionName;
(function (positionName) {
    // String Enum
    positionName["Dev"] = "Developer";
    positionName["Test"] = "Tester";
    positionName["Scrum_Master"] = "Scrum Master";
    positionName["PM"] = "Project manager";
})(positionName || (positionName = {}));
var Position = /** @class */ (function () {
    function Position(id, name) {
        this.positionId = id;
        this.positionName = name;
    }
    // getter & setter Id
    Position.prototype.getId = function () {
        return this.positionId;
    };
    Position.prototype.setId = function (value) {
        this.positionId = value;
    };
    // getter & setter Name
    Position.prototype.getName = function () {
        return this.positionName;
    };
    Position.prototype.setName = function (value) {
        this.positionName = value;
    };
    return Position;
}());
// Khởi tạo 3 đối tượng
var position1 = new Position(1, positionName.Dev);
var position2 = new Position(2, positionName.Scrum_Master);
var position3 = new Position(3, positionName.Test);
// In ra 1 đối tượng
console.log(position1.getId());
console.log(position1.getName());
// Account
var Account = /** @class */ (function () {
    function Account(id, email, userName, fullName, departmentId, positionId, createDate) {
        this.accountId = id;
        this.email = email;
        this.userName = userName;
        this.fullName = fullName;
        this.departmentId = departmentId;
        this.positionId = positionId;
        this.createDate = createDate;
    }
    // getter & setter Id
    Account.prototype.getId = function () {
        return this.accountId;
    };
    Account.prototype.setId = function (value) {
        this.accountId = value;
    };
    // getter & setter Email
    Account.prototype.getEmail = function () {
        return this.email;
    };
    Account.prototype.setEmail = function (value) {
        this.email = value;
    };
    // getter & setter Username
    Account.prototype.getUsername = function () {
        return this.userName;
    };
    Account.prototype.setUsername = function (value) {
        this.userName = value;
    };
    // getter & setter Fullname
    Account.prototype.getFullname = function () {
        return this.fullName;
    };
    Account.prototype.setFullname = function (value) {
        this.fullName = value;
    };
    // getter & setter departmentId
    Account.prototype.getDepartmentId = function () {
        return this.departmentId;
    };
    Account.prototype.setDepartmentId = function (value) {
        this.departmentId = value;
    };
    // getter & setter positionId
    Account.prototype.getPositionId = function () {
        return this.positionId;
    };
    Account.prototype.setPositionId = function (value) {
        this.positionId = value;
    };
    // getter & setter CreateDate
    Account.prototype.getCreateDate = function () {
        return this.createDate;
    };
    Account.prototype.setCreateDate = function (value) {
        this.createDate = value;
    };
    return Account;
}());
// Khởi tạo 3 đối tượng
var account1 = new Account(1, "thanh@gamil.com", "thanhpham", "Phạm Đức Thanh", department1, position1, new Date("2024-1-1"));
var account2 = new Account(2, "xinhxinh@gamil.com", "hoxinh", "Hồ Thị Xinh", department2, position2, new Date("2022, 12, 08"));
var account3 = new Account(3, "haudang@gamil.com", "haudang", "Đặng Hậu", department3, position3, new Date());
// In ra 1 đối tượng
console.log(account1.getId());
console.log(account1.getEmail());
console.log(account1.getUsername());
console.log(account1.getFullname());
console.log(account1.getDepartmentId().getName());
console.log(account1.getPositionId().getName());
console.log(account1.getCreateDate());
// Group
var Group = /** @class */ (function () {
    function Group(id, groupName, creatorID, createDate) {
        this.groupId = id;
        this.groupName = groupName;
        this.creatorID = creatorID;
        this.createDate = createDate;
    }
    // getter & setter Id
    Group.prototype.getId = function () {
        return this.groupId;
    };
    Group.prototype.setId = function (value) {
        this.groupId = value;
    };
    // getter & setter groupName
    Group.prototype.getGroupName = function () {
        return this.groupName;
    };
    Group.prototype.setGroupName = function (value) {
        this.groupName = value;
    };
    // getter & setter creatorID
    Group.prototype.getCreatorID = function () {
        return this.creatorID;
    };
    Group.prototype.setCreatorID = function (value) {
        this.creatorID = value;
    };
    // getter & setter createDate
    Group.prototype.getCreateDate = function () {
        return this.createDate;
    };
    Group.prototype.setCreateDate = function (value) {
        this.createDate = value;
    };
    return Group;
}());
// khởi tạo 3 đối tượng
var group2 = new Group(1, "Nhóm 1", account1, new Date());
var group1 = new Group(2, "Nhóm 2", account2, new Date('2020, 12, 12'));
var group3 = new Group(3, "Nhóm 3", account3, new Date('2021, 1, 1'));
// In ra 1 đối tượng
console.log(group1.getId());
console.log(group1.getGroupName());
console.log(group1.getCreatorID().getFullname());
console.log(group1.getCreateDate());
// GroupAccount
var GroupAccount = /** @class */ (function () {
    function GroupAccount(groupId, accountId, joinDate) {
        this.groupId = groupId;
        this.accountId = accountId;
        this.joinDate = joinDate;
    }
    // getter & setter groupId
    GroupAccount.prototype.getGruopId = function () {
        return this.groupId;
    };
    GroupAccount.prototype.setGruopId = function (value) {
        this.groupId = value;
    };
    // getter & setter accountId
    GroupAccount.prototype.getAccountId = function () {
        return this.accountId;
    };
    GroupAccount.prototype.setAccountId = function (value) {
        this.accountId = value;
    };
    // getter & setter joinDate
    GroupAccount.prototype.getJoinDate = function () {
        return this.joinDate;
    };
    GroupAccount.prototype.setJoinDate = function (value) {
        this.joinDate = value;
    };
    return GroupAccount;
}());
// Khởi tạo 3 đối tượng
var groupAccount1 = new GroupAccount(group1, account1, new Date());
var groupAccount2 = new GroupAccount(group2, account2, new Date());
var groupAccount3 = new GroupAccount(group3, account3, new Date('2024-01-13'));
// In ra 1 đối tượng
console.log(groupAccount1.getGruopId().getGroupName());
console.log(groupAccount1.getAccountId().getEmail());
console.log(groupAccount1.getJoinDate());
