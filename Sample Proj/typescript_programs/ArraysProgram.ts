// function countOfnumbers(num:number[]) : number{
//     let count = 0;
//     num.forEach((value) => {
//         count++;
//     });
//     return count;
// }
// let array : number[] = [-1, -8];
// let result1 : number = countOfnumbers(array);
// console.log(result1);


// what the function will return if we pass null array // output 0
// what the function will return if we pass right array with values // number
// what the function will return if we pass 0's in array // number
// what the funcation will return if we pass negative elements //number



// To find Largest Value in an Array and number of elements in Array
// We dont find this type of use case anywhere and to control the unexpected arguments we use types 
/*
function largestValue(lArr: any[]): [number | undefined | null, number | undefined] {

    if(lArr.length==0) {
        return [undefined, undefined];
    }

    if(lArr.includes(undefined) || lArr.includes(null)){
            console.log("Can not compare null or undefined to find the largest value in array");
            return [undefined, undefined];
    }

    let largest = 0;
    
    for(let val of lArr){
        if(val > largest){
            largest = val;
        }
    }

    return [largest, lArr.length];

}

let result = largestValue([5, 8, "9", "bcg"]);
let largestNumberInArray = result[0];
let lengthOfTheArray = result[1];

console.log("Largest Of the Array : ", largestNumberInArray);
console.log("Length Of the Array: ", lengthOfTheArray);
*/


// To find largest number of the Array

/*
function largestNumber(lArr: number[]): number | undefined {

    if(lArr.length==0) return undefined;

    let largestNum: number = 0;
    
    for(let val of lArr){
        if(val > largestNum){
            largestNum = val;
        }
    }

    return largestNum;

}

console.log("Largest Of the Array : ", largestNumber([0, 4, 8, 6]));
*/


// Reverse Array
/*
function reversedArrayF(rArr: number[]): number[]{

    let reversedArr : number[] = [];

    for(let i=rArr.length-1; i>=0; i--){
        if(rArr[i]!==undefined){
          reversedArr.push(rArr[i]!);
        }
    }    

    return reversedArr;

}
let originalArray : number[] = [5, 6, 8, 7];
let reveredArray : number[] = reversedArrayF(originalArray);
console.log("Original Array : ", originalArray);
console.log("Reversed Array : ", reveredArray);
*/


// to search an element in array

function searchElement(element : number, arr : number[]): boolean {

    let isElementPresent: boolean = false;

    for(let i=0; i < arr.length; i++){
       
        if(arr[i]===element){
            console.log("Element present at index : ", i);
            isElementPresent = true;
            break;
        }

    }

    return isElementPresent;
    
}

let ele : number = 56;
let sArr : number[] = [1, 4, 59, 56, 23];
let isElementAvailable : boolean = searchElement(ele, sArr);

console.log(`Element ${ele} is present in Array : ${isElementAvailable}`);
