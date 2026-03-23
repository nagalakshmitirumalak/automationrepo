// Create an interface IPayment with method pay(amount: number). 
// Implement CreditCardPayment, UpiPayment, and CashPayment with different behaviors.

interface IPayment{
    pay(amount: number): void;
}

class CreditCardPayment implements IPayment{
    creditCardNumber : string = "46323659755";

    creditCardPaymentRequest(amount: number){
        console.log(`Credit Card Payment request generated for ${amount} Rupees`);
    }

    pay(amount: number): void {
        this.creditCardPaymentRequest(amount);
        console.log(`${amount} paid by accepting the credit card payment request`);
    }

}

class UpiPayment implements IPayment{
    balance : number = 50000;
    upiMethod : string = "Phone Pe";

    pay(amount: number): void {
        if(this.balance >= amount){
            console.log(`${amount} is paid through UPI method : ${this.upiMethod}`);
        } else{
            console.log(`${amount} cant be paid, your balance is insufficient`);
        }
    }
}

class CashPayment implements IPayment{
    pay(amount: number): void {
        console.log(`${amount} paid by liquid cash`);
    }
}

let obj1 = new CreditCardPayment();
obj1.pay(2500);
let obj2 = new UpiPayment();
obj2.pay(100000);
let obj3 = new CashPayment();
obj3.pay(500);