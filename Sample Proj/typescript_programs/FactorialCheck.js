function factorialOf(fact) {
    if (fact == 0 || fact == 1)
        return 1;
    fact = fact * factorialOf(fact - 1);
    return fact;
}
console.log("Factorial Of : ", factorialOf(2));
