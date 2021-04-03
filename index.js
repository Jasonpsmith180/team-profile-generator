const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// begin user prompt for manager info
const promptManager = () => {
    console.log(`
    =======================
    Team Profile Generator!
    =======================
    `);
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Please enter the team manager's name."
            },
            {
                type: 'text',
                name: 'id',
                message: "Please enter the team manager's employee id number."
            },
            {
                type: 'text',
                name: 'email',
                message: "Please enter the team manager's email address."
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: "Please enter the team manager's office number"
            }
        ])
        // destructure info from prompt
        .then(({ name, id, email, officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber);
            
            console.log(manager);
            promptNextOrFinish();
        });
};

function promptNextOrFinish() {
    return inquirer
        .prompt({
            type: 'list',
            name: 'nextOrFinish',
            message: 'Would you like to enter an engineer or intern? Or finish the profile?',
            choices: ['Engineer', 'Intern', 'Finish Profile']
        })
        .then(answer => {
            console.log(answer);
            if (answer.nextOrFinish === 'Engineer') {
                console.log('blah blah');
                promptEngineer();
            } else if (answer.nextOrFinish === 'Intern') {
                console.log('yada yada');
                promptIntern();
            } else {
                console.log('hoody hoo')
            }
        })
}

function promptEngineer() {
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "Please enter the engineer's name."
            },
            {
                type: 'text',
                name: 'id',
                message: "Please enter the engineer's employee id number."
            },
            {
                type: 'text',
                name: 'email',
                message: "Please enter the engineer's email address."
            },
            {
                type: 'text',
                name: 'github',
                message: "Please enter the engineer's github account."
            }
        ])
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, email, id, github);

            console.log(engineer);
            promptNextOrFinish();
        })
}

function promptIntern() {
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: "Please enter the intern's name."
        },
        {
            type: 'text',
            name: 'id',
            message: "Please enter the intern's employee id number."
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter the intern's email address."
        },
        {
            type: 'text',
            name: 'school',
            message: "Please enter the intern's school."
        }
    ])
    .then(({ name, id, email, school }) => {
        const intern = new Intern(name, email, id, school);

        console.log(intern);
        promptNextOrFinish();
    })
}

promptManager();