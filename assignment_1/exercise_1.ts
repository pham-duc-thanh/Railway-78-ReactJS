
// Ex1: Datatype

// Department

class Department {
    private departmentId: number;
    private departmentName: string;

    constructor(id: number, name: string) {
        this.departmentId = id;
        this.departmentName = name;
    }

    // getter & setter Id
    public getId() {
        return this.departmentId;
    }

    public setId(value: number) {
        this.departmentId = value;
    }

    // getter & setter Name
    public getName() {
        return this.departmentName;
    }

    public setName(value: string) {
        this.departmentName = value;
    }
};

// Khởi tạo 3 đối tượng
var department1 = new Department(1, "Sale");
var department2 = new Department(2, "Marketing");
var department3 = new Department(3, "Giám đốc");

// In ra 1 đối tượng


// Position

enum positionName {
    // String Enum
    Dev = "Developer", Test = "Tester", Scrum_Master = "Scrum Master", PM = "Project manager"
}

class Position {
    private positionId: number;
    private positionName: positionName;

    constructor(id: number, name: positionName) {
        this.positionId = id;
        this.positionName = name;


    }

    // getter & setter Id
    public getId() {
        return this.positionId;
    }

    public setId(value: number) {
        this.positionId = value;
    }

    // getter & setter Name
    public getName() {
        return this.positionName;
    }

    public setName(value: positionName) {
        this.positionName = value;
    }
}

// Khởi tạo 3 đối tượng
var position1 = new Position(1, positionName.Dev);
var position2 = new Position(2, positionName.Scrum_Master);
var position3 = new Position(3, positionName.Test);

// In ra 1 đối tượng
console.log(position1.getId());
console.log(position1.getName());





// Account

class Account {
    private accountId: number;
    private email: string;
    private userName: string;
    private fullName: string;
    private departmentId: Department;
    private positionId: Position;
    private createDate: Date;

    constructor(id: number, email: string, userName: string, fullName: string,
        departmentId: Department, positionId: Position, createDate: Date) {

        this.accountId = id;
        this.email = email;
        this.userName = userName;
        this.fullName = fullName;
        this.departmentId = departmentId;
        this.positionId = positionId;
        this.createDate = createDate;
    }

    // getter & setter Id
    public getId() {
        return this.accountId;
    }

    public setId(value: number) {
        this.accountId = value;
    }

    // getter & setter Email
    public getEmail() {
        return this.email;
    }

    public setEmail(value: string) {
        this.email = value;
    }

    // getter & setter Username
    public getUsername() {
        return this.userName;
    }

    public setUsername(value: string) {
        this.userName = value;
    }

    // getter & setter Fullname
    public getFullname() {
        return this.fullName;
    }

    public setFullname(value: string) {
        this.fullName = value;
    }

    // getter & setter departmentId
    public getDepartmentId() {
        return this.departmentId;
    }

    public setDepartmentId(value: Department) {
        this.departmentId = value;
    }
    // getter & setter positionId
    public getPositionId() {
        return this.positionId;
    }

    public setPositionId(value: Position) {
        this.positionId = value;
    }

    // getter & setter CreateDate
    public getCreateDate() {
        return this.createDate;
    }

    public setCreateDate(value: Date) {
        this.createDate = value;
    }
}

// Khởi tạo 3 đối tượng
var account1 = new Account(
    1,
    "thanh@gamil.com",
    "thanhpham",
    "Phạm Đức Thanh",
    department1,
    position1,
    new Date("2024-1-1")
);

var account2 = new Account(
    2,
    "xinhxinh@gamil.com",
    "hoxinh",
    "Hồ Thị Xinh",
    department2,
    position2,
    new Date("2022, 12, 08")
);

var account3 = new Account(
    3,
    "haudang@gamil.com",
    "haudang",
    "Đặng Hậu",
    department3,
    position3,
    new Date()
);

// In ra 1 đối tượng
console.log(account1.getId());
console.log(account1.getEmail());
console.log(account1.getUsername());
console.log(account1.getFullname());
console.log(account1.getDepartmentId().getName());
console.log(account1.getPositionId().getName());
console.log(account1.getCreateDate());



// Group

class Group {
    private groupId: number;
    private groupName: string;
    private creatorID: Account;
    private createDate: Date;

    constructor(
        id: number, groupName: string,
        creatorID: Account, createDate: Date) {
        this.groupId = id;
        this.groupName = groupName;
        this.creatorID = creatorID;
        this.createDate = createDate;
    }

    // getter & setter Id
    public getId() {
        return this.groupId;
    }

    public setId(value: number) {
        this.groupId = value;
    }

    // getter & setter groupName
    public getGroupName() {
        return this.groupName;
    }

    public setGroupName(value: string) {
        this.groupName = value;
    }


    // getter & setter creatorID
    public getCreatorID() {
        return this.creatorID;
    }

    public setCreatorID(value: Account) {
        this.creatorID = value;
    }

    // getter & setter createDate
    public getCreateDate() {
        return this.createDate;
    }

    public setCreateDate(value: Date) {
        this.createDate = value;
    }
}

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

class GroupAccount {
    private groupId: Group;
    private accountId: Account;
    private joinDate: Date;

    constructor(
        groupId: Group,
        accountId: Account,
        joinDate: Date) {
        this.groupId = groupId;
        this.accountId = accountId;
        this.joinDate = joinDate;
    }

    // getter & setter groupId
    public getGruopId() {
        return this.groupId;
    }

    public setGruopId(value: Group) {
        this.groupId = value;
    }

    // getter & setter accountId
    public getAccountId() {
        return this.accountId;
    }

    public setAccountId(value: Account) {
        this.accountId = value;
    }

    // getter & setter joinDate
    public getJoinDate() {
        return this.joinDate;
    }

    public setJoinDate(value: Date) {
        this.joinDate = value;
    }
}

// Khởi tạo 3 đối tượng
var groupAccount1 = new GroupAccount(group1, account1, new Date()
);
var groupAccount2 = new GroupAccount(group2, account2, new Date()
);
var groupAccount3 = new GroupAccount(group3, account3, new Date('2024-01-13')
);

// In ra 1 đối tượng
console.log(groupAccount1.getGruopId().getGroupName());
console.log(groupAccount1.getAccountId().getEmail());
console.log(groupAccount1.getJoinDate());

