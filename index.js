const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const promptUser = () => {
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
        // destructure name from prompt
        .then(({ name, id, email, officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber);
            
            console.log(manager);
        });
};

promptUser();