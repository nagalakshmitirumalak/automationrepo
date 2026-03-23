import type { ITraining } from "./interface";
import { introduction } from "./function_demo";

class My_class implements ITraining{
    day1(): void {
        console.log("This is day1")
        introduction();
    }
    
    day2(): void {
        
    }
    day3(): void {
        
    }
}

let obj = new My_class();
obj.day1();
