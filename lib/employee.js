class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        return (this.name) ;
    }
    getId() {
        return (this.id);
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
    //check functionality with precoded classwork
    printInfo() {
        for (var key in this) {
          console.log(`${key}: ${this[key]}`);
        }
      }
}

//ex to check funcs
const user = new Employee('spoons', 34523, 'som@gmail.com', 'manager');
user.printInfo();
//Func works
user.getName();
user.getId();

module.exports = Employee;
  