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

//for example
const manager = new Manager ('barry', 23095823, 'manager');
manager.printInfo();

class Engineer extends Employee {
    constructor(name, id, title) {

    super(name, id, title);
    this.name = name;
    this.id = id;
    this.title = title;
    }
    getGithub() {
        //to return github username
        return this.github;

    }

    getRole() {
        return 'Engineer';
    }
}
const eng = new Engineer('boobs', 325, 'engineer');
eng.printInfo();

class Intern extends Employee {
    constructor(name, id, title) {

    super(name, id, title);
    this.name = name;
    this.id = id;
    this.title = title;
    }
    getSchool() {
        //to return school
        return this.school;

    }

    getRole() {
        return 'Intern';
    }
}