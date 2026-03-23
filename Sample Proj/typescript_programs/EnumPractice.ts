enum OrderStatus{
    Created = "Order is created",
    Processing = "Order is in processing",
    Shipped = "Order is Shipped",
    Delivered = "Order is Delivered"
}

function checkOrderStatus(status: String){
    
    if(Object.values(OrderStatus).includes(status as OrderStatus))
        return status;
    else{
        console.log("Order is encountering some technical problems");
    }
}

let statusOfOrder = checkOrderStatus("Order is created");

if(statusOfOrder!=undefined)
    console.log(statusOfOrder);



enum Days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday    
}

function whatsToday(num : number){
 return Days[num];
}

console.log("Today is : ", whatsToday(0));