function isPrime(n : number): boolean {

    if(n==0 || n==1) 
        return false;

    for(let i=2; i<n; i++){
        if(n % i === 0){
            return false;
        }
    }

    return true;
}

console.log("Is Prime : ", isPrime(2));