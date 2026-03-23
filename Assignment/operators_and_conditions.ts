// Write a program to check whether a number is prime. Also print all its factors.
// Add condition to classify number as EVEN/ODD and PRIME/NOT PRIME.

function primecheck(num : number){

    if(num%2===0) console.log(num, "is Even number");
    else console.log(num, "is Odd number");

    console.log("factors : ")
    let primefactorcount = 0;

    for(let i=1; i<=num; i++){

        if(num%i===0){
            console.log(i);
            primefactorcount++;
        }
        
    }

    if(primefactorcount===2) console.log(num, " : is Prime");
    else console.log(num, " : is not Prime");

}

primecheck(78);