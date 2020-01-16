class Employee {
    constructor(name, id, email, manager){
        this.name = name;
        this.id = id;
        this.email = email;
        this.manager = manager;
        this.getName = ()=> this.name;
        this.getId = () => this.id;
        this.getEmail = () => this.email;
        this.getRole = () => "Employee"
    }
};

const employee1 = new Employee("Lou", 6, "lou@lou.com");
// employee1.getName();
// employee1.getId();
// employee1.getEmail();
// employee1.getRole();
console.log(employee1);

module.exports = Employee;