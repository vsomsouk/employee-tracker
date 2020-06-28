var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
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

/*  connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  addDepartment();
});

function addDepartment(); {
  console.log("Adding New Department...\n");
  var query = connection.query(
    "INSERT INTO department SET ?",
    {
      : "DEPARTMENT NAME",
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  ); */

//addRoles();

//add Employees();

//viewDepartment();

//viewRoles();

//viewEmployees();

//exit();