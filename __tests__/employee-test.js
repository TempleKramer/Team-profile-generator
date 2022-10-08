const Employee = require("../lib/Employee")
const employee = new Employee("Temple", 1, "Temple0715@gmail.com")

test('testing employee class', () => { 
    expect(typeof employee == "object").toEqual(true)
})

test('testing getname()', () => {
    expect(employee.getName()).toEqual("Temple")
})

test('testing getId()', () => {
    expect(employee.getId()).toEqual(1)
})

test('testing getEmail()', () => {
    expect(employee.getEmail()).toEqual('Temple0715@gmail.com')
})

test('testing getRole()', () => {
    expect(employee.getRole()).toEqual('Employee')
})