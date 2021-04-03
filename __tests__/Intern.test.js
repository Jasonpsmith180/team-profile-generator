const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Mike', 360, 'email@email.com', 'school');

    expect(intern.name).toBe('Mike');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern')
})