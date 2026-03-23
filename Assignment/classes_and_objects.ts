// Create a class Training with properties and methods. Create multiple objects and call methods
// Add constructor and initialize values

class Training{
    
    constructor(company: string, batch1_Students : number, training1: string, training2: string){
        this.company = company;
        this.batch1_Students = batch1_Students;
        this.training1 = training1;
        this.training2 = training2;
    }

    company: string;
    batch1_Students: number;
    training1: string;
    training2: string;

    batch1Training(): void{
        console.log(`Batch 1 training in ${this.company} with ${this.batch1_Students} students, training 1 is ${this.training1} and training 2 is ${this.training2}`);
    }

    batch2Training(): void{
        console.log(`Batch 2 training in ${this.company} with ${this.batch1_Students} students, training 1 is ${this.training1} and training 2 is ${this.training2}`);
    }

}

let techie: Training = new Training("techie", 12, "Guidewire Functionality", "Automation");
techie.batch1Training();
techie.batch2Training();

let tcs: Training = new Training("tcs", 15, "Guidewire Functionality", "Testing");
tcs.batch1Training();
tcs.batch2Training();