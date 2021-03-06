const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Will', 420, 'email@email.com', 'github');

    expect(engineer.name).toBe('Will');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
})