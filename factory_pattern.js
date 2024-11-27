// Factory pattern

function Developer(name) {
    this.name = name
    this.type = "Developer"
}

function Tester(name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (type, name) => {
        switch(type) {
            case "Developer":
                return new Developer(name)
            case "Tester":
                return new Tester(name)
            default:
                throw new Error("Invalid type")
        }
    }
}

function say() {
    console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Developer", "John"))
employees.push(employeeFactory.create("Tester", "Jane"))
employees.push(employeeFactory.create("Developer", "Patrick"))
employees.push(employeeFactory.create("Tester", "John"))
employees.push(employeeFactory.create("Developer", "Taylor"))
employees.push(employeeFactory.create("Developer", "Jamie"))

employees.forEach(employee => {
    employee.say = say
    employee.say()
})