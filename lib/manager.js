class Manager {
    constructor(name, id, email, phone, auth){
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.auth = auth;
        this.getName = ()=> this.name;
        this.getId = () => this.id;
        this.getEmail = () => this.email;
        this.getRole = () => "Manager"
    }
};


module.exports = Manager;