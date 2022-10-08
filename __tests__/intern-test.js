const Intern = require("../lib/Intern")
const intern = new Intern("Temple", 1234, "Temple0715@gmail.com", 'University of Texas')

test('testing getSchool()', () => {
    expect(intern.getSchool()).toEqual('University of Texas') 
})

test('testing getRole()', () => {
    expect(intern.getRole()).toEqual('Intern')
})