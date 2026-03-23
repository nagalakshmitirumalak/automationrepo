// Create interface IBankAccount with methods deposit(), withdraw(), getBalance(). 
// Implement SavingsAccount and CurrentAccount with rules.

interface IBankAccount{
    deposit(depositAmount: number): void;
    withdraw(withDrawAmount : number): void;
    getBalance(): number;
}

class SavingsAccount implements IBankAccount{

    constructor(){}

    balance : number = 0;
    depositLimit : number = 0;
    withdrawlimit : number = 0;

    deposit(depositAmount: number): void {
        if(this.depositLimit <= 1000000 && this.balance <= 1000000 && depositAmount <= 1000000){
            this.balance = this.balance + depositAmount;
            this.depositLimit = this.depositLimit + depositAmount;
            console.log(`${depositAmount} Rupees are credited to your savings account`);
        } else if (depositAmount >= 1000000) {
            console.log(`${depositAmount} cant be credited to your savings account and deposit amount is above limit`);
        }
        else {
            console.log(`${depositAmount} cant be credited to your savings account and deposit limit reached`);
        }
    }

    withdraw(withDrawAmount : number): void {
        if(this.withdrawlimit <= 1000000){
            if(this.balance >= withDrawAmount)  {
                this.balance = this.balance - withDrawAmount;
                console.log(`${withDrawAmount} Rupees are withdrawn from savings account`);
                this.withdrawlimit = this.withdrawlimit + withDrawAmount;
            }
            else {
                console.log(`You cant withdaw ${withDrawAmount} as your balance is insufficient`);
            }
        }      
    }

    getBalance(): number {
        return this.balance;
    }

}

class CurrentAccount implements IBankAccount{
    constructor(){}

    balance: number = 0;

    deposit(depositAmount: number): void {
        this.balance = this.balance + depositAmount;
        console.log(`${depositAmount} Rupees are credited to your current account`);
    }

    withdraw(withDrawAmount: number): void {
        if(this.balance >= withDrawAmount){
            this.balance = this.balance - withDrawAmount;
            console.log(`${withDrawAmount} Rupees are withdrawn from your current account`);
        } else {
            console.log(`${withDrawAmount} cant withdrawn from your current account, your balance is sufficient`);
        }
    }

    getBalance(): number {
        return this.balance;
    }

}

let savingsAcc = new SavingsAccount();
savingsAcc.deposit(1500000);
savingsAcc.withdraw(500);
console.log(`Balance in your savings account: ${savingsAcc.getBalance()} Rupees`);
savingsAcc.deposit(700);
console.log(`Balance in your savings account: ${savingsAcc.getBalance()} Rupees`);

let currentAcc = new CurrentAccount();
currentAcc.deposit(2000000);
currentAcc.withdraw(700);
console.log(`Balance in your current account: ${currentAcc.getBalance()} Rupees`);
currentAcc.deposit(500);
console.log(`Balance in your current account: ${currentAcc.getBalance()} Rupees`);