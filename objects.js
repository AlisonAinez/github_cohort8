const obj = {
  name: ` ALISON AINEMBABAZI`,
  gender: `female`,
  age: `21`,
};
// adding props to objects
let phone = {
  brand: "Samsung",
  model: "Galaxy S22",
  price: 350000,
};

phone.color = "Black";
console.log(phone);

let student = {
  name: "Alison",
  regNo: "C8/001",
  course: "JavaScript",
  year: 2025,
};
console.log(student);
((student.gender = "Male"), console.log(student));
student.course = "Node.js";
console.log(student);
delete student.year;
console.log(student);

let employee = {
  name: "Tunde Balogun",
  role: "Frontend Developer",
  salary: 450000,
  city: "Lagos",
};

let hisName = employee.name;
let hisRole = employee.role;
let hisSalary = employee.salary;
let hisCity = employee.city;

const { name, role, salary, city } = employee;
