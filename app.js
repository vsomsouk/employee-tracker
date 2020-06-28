const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table')

const connection = mysql.createConnection({
  host: "localhost",

  // port
  port: 3306,

  //  username
  user: "root",

  // password
  password: "HELLO",
  database: "employee_tracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runStart();
});

function runStart () {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Add Roles",
            "Add Employee",
            "View Department",
            "View Roles",
            "View Employees",
            "Update Employee's Role",
            "Exit"
        ]
    })
    .then(function(answer) {
        switch (answer.action) {
        case "Add Department":
          addDepartment();
          break;
  
        case "Add Roles":
          addRoles();
          break;
  
        case "Add Employee":
          addEmployee();
          break;
  
        case "View Department":
          viewDepartment();
          break;

        case "View Roles":
          viewRoles();
          break; 

        case "View Employees":
          viewEmployees();
          break;
  
        case "Update Employee's Role":
          updateRole();
          break; 
  
        case "Exit":
          connection.end();
          break;
        }
      });
 };


function addDepartment() {
  inquirer.prompt ([{
    name:"dept_name",
    type: "input",
    message: "Department name?"
  }
]).then(function(answer){
    connection.query(
      "INSERT INTO department SET ?",
      {
        dept_name: answer.dept_name
      },
      function (err) {
        if (err) throw err;
        console.log("Department has been added.")

        console.table();
      runStart();
      }
    );
  });
}

// addRoles();
function addRoles() {
  inquirer.prompt ([{
    name:"title",
    type: "input",
    message: "What is the title?"
  },
  {
    name:"salary_number",
    type: "input",
    message: "What is the salary?"
  },
  {
    name:"department_id",
    type: "input",
    message: "What is the department id?"
  }
]).then(function(answer){
    connection.query(
      "INSERT INTO roles SET ?",
      {
        title: answer.title,
        salary: answer.salary_number,
        department_id: answer.department_id
      },
   

      function (err) {
        if (err) throw err;
        console.log("Roles has been added.")
        runStart();
      }
    );
  });
}

//add Employee();
function addEmployee() {
  inquirer.prompt ([{
    name:"firstName",
    type: "input",
    message: "What is the first name?"
  },
  {
    name:"lastName",
    type: "input",
    message: "What is the last name?"
  },
  {
    name:"roleId",
    type: "input",
    message: "What is the role ID?"
  },
  {
    name:"managerId",
    type: "input",
    message: "If a manager, what is the manager ID?"
  }
]).then(function(answer){
    connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.roleId,
        manager_id: answer.managerId
      },
   

      function (err) {
        if (err) throw err;
        console.log("Employee has been added.")
        runStart();
      }
    );
  });
}

//viewDepartment();
function viewDepartment () {
  const query = "SELECT * FROM department"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runStart();
  }
  )};

//viewRoles();
function viewRoles () {
  const query = "SELECT * FROM roles"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runStart();
  }
  )};

//viewEmployees();
function viewEmployees () {
  const query = "SELECT * FROM employee"
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    runStart();
  }
  )};

