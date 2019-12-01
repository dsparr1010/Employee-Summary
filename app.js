const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require ('./lib/employee.js');
const Manager = require ('./lib/Manager.js');
const Intern = require ('./lib/Intern.js');
const Engineer = require ('./lib/Engineer.js');

let role = '';
let officeNumber = '';
let school = '';
let github = '';
let roleAnswer = '';

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of Employee: '
        },{
            type: 'input',
            name: 'id',
            message: 'Employee id: '
        },{
            type: 'input',
            name: 'email',
            message: 'Employee email: '
        },{
            type: 'input',
            name: 'title',
            message: "Employee's position in the company: "
        }
    ])

};

function generateRoleQ(input) {
    if (input.title === 'manager') {
        role = 'manager';        
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?'
            }
        ])
    }
    

    if (input.title === 'intern') {
        role = 'intern';
        const intern = new Intern(input.name, input.id, input.email);
        console.log(intern);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of your school?'
            }
        ])
    }  

    if (input.title === 'engineer') {
        role = 'engineer';
        const engineer = new Engineer(input.name, input.id, input.email);
        console.log(engineer);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?'
            }
        ])
    }

    else {
        console.log('preset role not selected');
    }

};


function addEmp() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'add',
            message: 'Would you like to add an employee to the team?'
        }
        ])
};

function iterate(answer) {
    if (answer.add === 'yes') {
        awaitInfo();
    }
    else {
        console.log("\nGoodbye!");
        process.exit(0);
    }

    //add generateHTML() here
};

/*
function generateHTML() {

    //

};

*/

function instantiate(input, roleQ) {
    roleAnswer = roleQ
     if (input.title === 'manager') {
        const manager = new Manager(input.name, input.id, input.email, roleAnswer);
        console.log(manager)
    };
    if (input.title === 'intern') {
        const intern = new Intern(input.name, input.id, input.email, roleAnswer);
        console.log(intern)
        intern.getSchool();
    };
    if (input.title === 'engineer') {
        const engineer = new Engineer(input.name, input.id, input.email, roleAnswer);
        //werks
        console.log(engineer.getGithub())
    };
}

async function awaitInfo() {
    try {
        const input = await promptUser();
        const roleQ = await generateRoleQ(input);
        instantiate(input, roleQ)
        const answer = await addEmp();
        iterate(answer);
        

    } catch(err) {
      console.log(err);
    }
  };

  
  awaitInfo();  