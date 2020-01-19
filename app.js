const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const path = require("path");
const render = require("./lib/htmlRenderer");
const outputPath = path.resolve(__dirname, "output", "team.html");

const employees = [];

let managerAuth = null;
let database;

const init = () => {
    database = []
    inquirer.prompt({
        message: "select a function",
        name: "action",
        type: "list",
        choices: ['add employee', 'remove employee','generate team']
    }).then(res=>{
        switch (res.action){
            case 'add employee':
                createEmployee();
                break;
            case 'remove employee':
                removeEmployee();
                break;
            case 'generate team':
                generateTeam();
                break;
        }
    })
}

function createEmployee (){
    inquirer.prompt([{
        message:"Please enter employee name",
        name:"name",
        type: "input",
    },
    {
        message:"Please select employee role",
        name:"role",
        type: "list",
        choices: ["Manager", "Intern", "Engineer"]
    },{
        message:"Please enter employee email",
        name:"email",
        type: "input",
    }
]).then(answer=>{
    let cond;
    switch(answer.role){
        case "Manager":
            cond= ['What is your phone number?', Manager]
            break;
        case "Engineer":
            cond = ['Please enter your GitHub username', Engineer]
            break;
        case "Intern":
            cond = ['What school are you in?', Intern]
            break;
    }
    inquirer.prompt([{
        message: cond[0],
        name: 'uniq',
        type: 'input'
    }]).then(res=>{
       let newEmp = new cond[1](answer.name, database.length+1, answer.email, res.uniq);
        console.log(`You have created the following eployee:
        Name: ${newEmp.name}
        ID: ${newEmp.id}
        Email: ${newEmp.email}
        Role: ${newEmp.getRole()}`);

        employees.push(newEmp);
        console.log(employees);
        render(employees);
    })
})
}
init();