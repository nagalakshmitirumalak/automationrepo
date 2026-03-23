// Write a function that accepts any type and prints it
// Then rewrite using unknown and safely handle type checking

// any
function anyFunction(input : any){
    console.log("any function output : ", input+2);
}

let inputValue : any = 10;
inputValue = "hello world!!";
anyFunction(inputValue);

//unknown
function unknownFunction(input : unknown){
    if(typeof input === "number") console.log("Unknown function output : ", input+2);
    else if(typeof input === "string") console.log("Unknown function output : ", input+2);
    else console.log("Unknown function output : ", input);
}

let unknownValue: unknown = 15;
unknownValue = "Hi there!!";
unknownFunction(unknownValue);