// 📝 Problem Statement:

// Capitalize the Last Letter of Each Word

// You are given a string s consisting of words separated by spaces.
// Write a function that capitalizes the last character of each word in the string and returns the transformed sentence.

// Example 1

// Input:

// s = "sanu krishna pm"


// Output:

// "sanu krishnA pM"




let str = "sanu krishna pm";

let word = str.split(' ');

for( let i = 0; i< word.length; i++){
 
    let item =  word[i].split('')
  
  
  item[item.length-1] = item[item.length-1].toUpperCase()
   
    word[i] = item.join('')
    
};

console.log(word.join(' ')) //output : sanU krishnA pM


