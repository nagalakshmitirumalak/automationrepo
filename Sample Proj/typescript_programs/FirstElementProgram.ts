// Write a function that returns the first element of a number array

function getFirstElement(numberArray : number[]): number | undefined {
 
    let firstElement: number | undefined = numberArray[0];

    return firstElement;
 
}

let numArr: number[] = [5, 6, 7];

console.log("First number of the Array: ", getFirstElement(numArr));