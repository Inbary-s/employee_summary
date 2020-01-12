class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {console.log(this.name)};
    getId() {console.log(this.id)};
    getEmail() {console.log(this.email)};
    getRole() {console.log("Employee")};
};

const employee1 = new Employee("Lou", 6, "lou@lou.com");
employee1.getName();
employee1.getId();
employee1.getEmail();
employee1.getRole();
