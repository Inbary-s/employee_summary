const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


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
            cond= ['What is your phone number?', 'Creating new manager, please enter password', Manager]
            break;
        case "Engineer":
            cond = ['Please enter your GitHub username', "What is your manager's ID", Engineer]
            break;
        case "Intern":
            cond = ['What school are you in?', "What is your manager's ID?", Intern]
            break;
    }
    inquirer.prompt([{
        message: cond[0],
        name: 'uniq',
        type: 'input'
    },{
        message: cond[1],
        name: 'manager',
        type: 'input'
    }]).then(res=>{
       let newEmp = new cond[2](answer.name, database.length+1, answer.email, res.uniq, res.manager )
        console.log(newEmp)
    })
})
}
init();