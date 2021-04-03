const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    // create new employee
    const employee = new Employee('Steve', 1, 'email@email.com', 'manager');
    // test each arg passed into the new object
    expect(employee.name).toBe('Steve');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

