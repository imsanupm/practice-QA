//  Question: Interleave Array and String
// Problem Statement:

// You are given:

// An array of numbers:
 let array = [1, 2, 3, 4, 5]

// A string:
let str = "Hello"

// Write a program to create a new string where each element from the array is followed by the corresponding character from the string.

// Output:

// "1H2e3l4l5o"


let output = ""
for(let i=0; i<array.length; i++){
    output += array[i]

    if(i<str.length){
        output+=str[i]
    }
}
console.log(output)
