class Intern {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.getName = ()=> this.name;
        this.getId = () => this.id;
        this.getEmail = () => this.email;
        this.getSchool = () => this.school;
        this.getRole = () => "Intern"
    }
};


module.exports = Intern;