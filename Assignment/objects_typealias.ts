// Create a type alias for Employee. Store multiple employees in an array and print employees with salary > 50000

type Employee = {
    name : string,
    company : String,
    salary : number
}

function minSalaryEmployees(employees : Employee[]): Employee[]{
    let minsalaryEmps : Employee[] = [];
    for(let employee of employees){
        if(employee.salary > 50000) minsalaryEmps.push(employee);
    }
    return minsalaryEmps;
}

const employeeArray : Employee[] = [ { name: "Lakshmi", company: "Techie", salary: 80000 }, 
    { name: "Rambabu", company: "Tech Mahindra", salary: 30000 }, 
    { name: "Ravi", company: "TCS", salary: 100000} ];

console.log("Employees with salary more than 50000 are : ", minSalaryEmployees(employeeArray));