const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require ('./lib/Manager.js');
const Intern = require ('./lib/Intern.js');
const Engineer = require ('./lib/Engineer.js');
let content;

let role = '';
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
                message: "What is this manager's office number?"
            }
        ])
    }
    

    if (input.title === 'intern') {
        role = 'intern';
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of the school this intern attends?'
            }
        ])
    }  

    if (input.title === 'engineer') {
        role = 'engineer';
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter the GitHub username for this engineer: '
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
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee to the team?',
            choices: [
                'Yes',
                'No'
            ]
        }
        ])
};

function iterate(answer) {
    if (answer.add === 'Yes') {
        awaitInfo();
    }
    else {
        console.log("\nGoodbye!");
        process.exit(0);
    }

};


function instantiate(input, roleQ) {
     if (input.title === 'manager') {
       // const manager = new Manager(input.name, input.id, input.email, officeNumber);
        const officeNumber = roleQ.officeNumber;
        const managerCard =
        `<div class="col-4">
                <div class="card bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white">
                        <h5 class="card-title">${input.name}</h5>
                        <h5 class="card-subtitle">Manager</h5>
                    </div>
                    <div class="card-body bg-light">
                        <div class="bg-white m-3">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${input.id}</li>
                                <li class="list-group-item">Email: ${input.email}</span></li>
                                <li class="list-group-item">Office Number: ${officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
  
      try {
        fs.appendFileSync("./output/main.html", `${managerCard}`);
      }
      catch {
        console.error("Unable to write to manager file.");
      };
    };
    if (input.title === 'intern') {
        //const intern = new Intern(input.name, input.id, input.email, school);
        const school = roleQ.school;
        const internCard =
        `<div class="col-4">
                <div class="card bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white">
                        <h5 class="card-title">${input.name}</h5>
                        <h5 class="card-subtitle">Intern</h5>
                    </div>
                    <div class="card-body bg-light">
                        <div class="bg-white m-3">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${input.id}</li>
                                <li class="list-group-item">Email: ${input.email}</span></li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
  
      try {
        fs.appendFileSync("./output/main.html", `${internCard}`);
      }
      catch {
        console.error("Unable to write to intern file.");
      }
    };

    if (input.title === 'engineer') {
        //const engineer = new Engineer(input.name, input.id, input.email, github);
        const git = roleQ.github;
        const engineerCard =
      `<div class="col-4">
              <div class="card bg-primary mb-3" style="max-width: 18rem;">
                  <div class="card-header text-white">
                      <h5 class="card-title">${input.name}</h5>
                      <h5 class="card-subtitle">Engineer</h5>
                  </div>
                  <div class="card-body bg-light">
                      <div class="bg-white m-3">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${input.id}</li>
                              <li class="list-group-item">Email: ${input.email}</span></li>
                              <li class="list-group-item">Github: ${git}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>`;

    try {
      fs.appendFileSync("./output/main.html", `${engineerCard}`);
    }
    catch {
      console.error("Unable to write to engineer file.");
    }
};
};

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


  function resetHtml(){
      fs.readFile('./templates/main.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
       processFile();       
    }); 
    }
    function processFile() {
        fs.writeFile("./output/main.html", content, function (err) {
          if (err) {
            throw err;
          }
        });
      }
      
resetHtml();
awaitInfo();  