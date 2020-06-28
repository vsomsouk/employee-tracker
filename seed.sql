USE employee_tracker_db;

INSERT INTO department (dept_name)
VALUES ("Marketing"), ("Sales"), ("Administration");

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Manager", 80000, 1), ("Marketing Specialist", 70000, 1), ("Social Media Specialist", 65000, 2), 
("National Sales Manager", 90000, 2), ("Sales Representative", 55000, 2), ("Executive Assistant", 50000, 3), 
("Administrative Assistant", 42000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tina", "Belcher", 123, 1), ("Louise", "Belcher", 987, NULL), ("Linda", "Belcher", 654, NULL), ("Bob", "Belcher", 456, 2), 
("Gene", "Belcher", 321, NULL), ("Jimmy", "Pesto", 321, NULL), ("Tammy", "Larsen", 789, 3), ("Courtney", "Wheeler", 098, NULL),
("Phillip", "Frond", 098, NULL);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;


