class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee';
    }

    printInfo() {
        for (var key in this) {
          console.log(`${key}: ${this[key]}`);
        }
      }  
}

module.exports = Employee;