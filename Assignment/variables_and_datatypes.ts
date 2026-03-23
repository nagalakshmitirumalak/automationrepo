// Write a program to declare variables of all TypeScript data types. Print their values and types.
// Extend it to create a student object with name, age, and isPassed.

class datatypes_and_values{

    constructor(){
    }

    datatypes(): void {
    
        let num : number = 48;
        let person : string = "Lakshmi";
        let isRectangle : boolean = true;
        let length = null;
        let height;
        let studentID = Symbol('ID');
        let hallticketNum : bigint = 65n;
        let fun : any = "fun";
        
        console.log(num, ":", typeof num);
        console.log(person, ":", typeof person);
        console.log(isRectangle, ":", typeof isRectangle);
        console.log(length, ":", typeof length);
        console.log(height, ":", typeof height);
        console.log(studentID, ":", typeof studentID);
        console.log(hallticketNum, ":", typeof hallticketNum);
        console.log(fun, ":", typeof fun);

    }
    
}

let obj = new datatypes_and_values();
console.log("Datatypes in Typescript are : ");
obj.datatypes();


type Student = {
    name : string;
    age: number;
    isPassed : boolean;
}

let student: Student = {
    name : "Lakshmi",
    age : 14,
    isPassed : true
}

console.log("Student details : \n name :", student.name, "\n age: ", student.age, "\n isPassed :", student.isPassed);