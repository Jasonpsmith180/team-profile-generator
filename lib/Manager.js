class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, role)

        this.officeNumber = officeNumber;
    }

    getRole() {
        // overrides to return Manger
        this.role = 'Manager'
        return this.role;
    }
}