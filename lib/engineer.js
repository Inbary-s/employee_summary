class Engineer {
    constructor(name, id, email, github, manager){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.manager = manager;
        this.getName = ()=> this.name;
        this.getId = () => this.id;
        this.getEmail = () => this.email;
        this.getRole = () => "Engineer"
    }
};


module.exports = Engineer;