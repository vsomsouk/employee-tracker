DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DEC(7,2) NOT NULL,
department_id INT NOT NULL
);

CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INT 
);


SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;