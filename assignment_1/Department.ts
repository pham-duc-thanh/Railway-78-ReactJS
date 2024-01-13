
export class Department {

    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // getter && setter Id
    public getId() {
        return this.id;
    }

    public setId(value: number) {
        this.id = value;
    }

    // getter && setter Name
    public getName() {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    } 
}

export var department1= new Department(1, "Phạm Đức Thanh");

export function printDepartment(d: Department) : void {
    console.log('id:', d.getId());
    console.log('id:', d.getName());
};



// export {Department, department1, printDepartment}