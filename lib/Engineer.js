const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);

        this.github = github;
        this.getRole();
    }

    getRole() {
        // override to return Engineer
        this.role = 'Engineer'
        return this.role;
    }
}

module.exports = Engineer;