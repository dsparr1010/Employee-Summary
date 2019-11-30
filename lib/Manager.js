const Employee = require ('../lib/employee');

class Manager extends Employee {
    constructor(name, id, title) {
     //   let officeNumber = 234;

    super(name, id, title);
    this.name = name;
    this.id = id;
    this.title = title;
    }

    getRole() {
        return 'Manager';
    }
}