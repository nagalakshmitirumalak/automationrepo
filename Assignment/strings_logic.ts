// Write a program to reverse a string without using built-in reverse().
// Then check if the string is a palindrome.

function reverseAndPalindromeCheck(str : string){

    let chars : string[] = [];

    for(let i=str.length-1; i>=0; i--){
        if(str[i]!==undefined){
            chars.push(str[i]!);
        }
    }

    let reverseString = chars.join("");
    console.log("Reverse String : ", reverseString);

    if(str === reverseString) console.log(`${str} is a Palindrome`);
    else console.log(`${str} is not a Palindrome`);

}

reverseAndPalindromeCheck("madam");