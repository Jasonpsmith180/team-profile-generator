const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Steve', 69, 'email@email.com', 420);

    expect(manager.name).toBe('Steve');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});