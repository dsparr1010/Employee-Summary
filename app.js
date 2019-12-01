const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require ('./lib/employee.js');
const Manager = require ('./lib/Manager.js');
const Intern = require ('./lib/Intern.js');
const Engineer = require ('./lib/Engineer.js');

let role = '';

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },{
            type: 'input',
            name: 'id',
            message: 'What is your id?'
        },{
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },{
            type: 'input',
            name: 'title',
            message: 'What is your position in the company?'
        }
    ])

};

function generateRoleQ(input) {
    if (input.title === 'manager') {
        role = 'manager';
        const manager = new Manager(input.name, input.id, input.email);
        console.log(manager);
        
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?'
            }
        ]); 
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

    /*
    const emp = new Employee(input.name, input.id, input.email, input.title)
    console.log(emp)
    */
};

function instantiate() {

}

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
};

/*
function generateHTML() {

};

*/

async function awaitInfo() {
    try {
        const input = await promptUser();
        await generateRoleQ(input);
        const answer = await addEmp();
        await iterate(answer);
        

    } catch(err) {
      console.log(err);
    }
  };

  
  awaitInfo();  