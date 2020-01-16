class Intern {
    constructor(name, id, email, school, manager){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.manager = manager;
        this.getName = ()=> this.name;
        this.getId = () => this.id;
        this.getEmail = () => this.email;
        this.getRole = () => "Intern"
    }
};


module.exports = Intern;