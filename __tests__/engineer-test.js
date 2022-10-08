const Engineer = require("../lib/Engineer")
const engineer = new Engineer("Temple", 1234, "Temple0715@gmail.com", 'Temple1')

test('testing getGithub()', () => {
    expect(engineer.getGithub()).toEqual('Temple1')
})

test('testing getRole()', () => {
    expect(engineer.getRole()).toEqual('Engineer')
})