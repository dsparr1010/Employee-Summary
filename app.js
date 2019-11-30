const inquirer = require('inquirer');
const fs = require('fs');

/*to prompt the user for their email, id, and specific information based 
on their role with the company. For instance, an intern may provide their
 school, whereas an engineer may provide their GitHub username.
 */

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },{
            type: 'input',
            name: 'title',
            message: 'What is your position in the company?'
        },{
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },{
            type: 'input',
            name: 'id',
            message: 'What is your id?'
        }
    ])
};

function generateRoleQ(input) {
    if (input.title === 'manager') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?'
            }
        ])
    }
    if (input.title === 'intern') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of your school?'
            }
        ])
    }   
    if (input.title === 'engineer') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?'
            }
        ])
    }
    else if (input.title === !"engineer"||"manager"||"intern") {
        console.log('preset role not selected')
    }
}

async function awaitInfo() {
    try {
        const input = await promptUser();
        generateRoleQ(input);
  
    } catch(err) {
      console.log(err);
    }
  };

  
  awaitInfo();  