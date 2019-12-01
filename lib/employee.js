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
        console.log (this.email);
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

   printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.id} damage.`);
    console.log(`${this.name} has ${this.email} hit points remaining!`);
    console.log(this.title);
    console.log("------------");
  }   
}



//ex to check funcs
//const user = new Employee('spoons', 34523, 'som@gmail.com', 'manager');
//user.printInfo();
//Func works
//user.getName();
//user.getId();

module.exports = Employee;
  