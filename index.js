const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

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
            }
        ])
        // destructure name from prompt
        .then(({ name, id, email }) => {
            const employee = new Employee(name, id, email);
            
            console.log(employee);
        });
};

promptUser();