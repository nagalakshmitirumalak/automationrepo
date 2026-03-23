// Write a function that takes an array of numbers and returns:
// Sum, Maximum, Minimum, Even numbers only // Use different function types (arrow, normal)

// Using Arrow functions for each operation
const sumOfArray = (arr : number[]): number => {
    let sum : number = 0;
    for(let n of arr)  sum+=n;
    return sum;
}

const maxOfArray = (arr : number[]): number => {
    let max: number = -Infinity;
    for(let n of arr){
        if(n>max) max = n;
    }
    return max;
}

const minOfArray = (arr : number[]): number => {
    let min: number = Infinity;
    for(let n of arr){
        if(n<min) min = n;
    }
    return min;
}

const evenNumbersInArray = (arr : number[]): number[] => {
    let evenNums : number[] = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==undefined){
            if(arr[i]!%2===0) evenNums.push(arr[i]!)
        }
    }
    return evenNums;
}

let array : number[] = [5, 2, 3, 7];
console.log("Sum of the Array : ", sumOfArray(array));
console.log("Max of the Array : ", maxOfArray(array));
console.log("Min of the Array : ", minOfArray(array));
console.log("Even elements in the Array : ", evenNumbersInArray(array));


// Using single normal function
function arrayOperations(arr : number[]): [number, number, number, number[]]{

    let sum: number = 0;
    let max: number = -Infinity;
    let min: number = Infinity;
    let evenNumbers : number[] = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i]!==undefined) {
            sum += arr[i]!;
            if(arr[i]!>max) max = arr[i]!;
            if(arr[i]!<min) min = arr[i]!;
            if(arr[i]!%2===0) evenNumbers.push(arr[i]!);
         }
    }

    return [sum, max, min, evenNumbers];
}

let result = arrayOperations([12, 45, 4, 7, 3]);
console.log("Sum of elements in Array : ", result[0]);
console.log("Max element in the Array : ", result[1]);
console.log("Min element in the Array : ", result[2]);
console.log("Even elements in the Array : ", result[3]);