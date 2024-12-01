// Visitor pattern - A way of separating an algorithm from an object structure on which it operates
// Allow to ad new operations and methods to objects without modifying them

function EmployeeFactory(name, salary) {
    this.name = name
    this.salary = salary
}

EmployeeFactory.prototype = {
    getSalary: function() {
        return this.salary 
    },
    setSalary: function(sal) {
        this.salary = sal
    },
    accept: function(visitorFunction) {
        visitorFunction(this)
    }
}

const devsage = new EmployeeFactory("devsage", 10000)

console.log(devsage.getSalary())

function ExtraSalary(emp) {
    emp.setSalary(emp.getSalary() * 2)
}

devsage.accept(ExtraSalary)

console.log(devsage.getSalary())