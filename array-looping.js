// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`

// ---

//complete the task:
const colours = ['red', 'blue', 'green', 'yellow', 'orange'];


const reverse_colours = [];
for(const colour of colours){
    
    reverse_colours.unshift(colour);
}
console.log(colours);
console.log(reverse_colours);

/**
 ### Task 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

**Input:**
`const numbers = [12, 98, 5, 41, 23, 78, 46];`

**Output:**

`[12, 98, 76, 46]`

---
 */
// const numbers = [12, 98, 5, 41, 23, 78, 46];

// //sum
// let getEven = 0;
// for ( let i= 0; i<numbers.length; i++){
//     const x =numbers[i];
//     if(x%2===0){
//         getEven+=x;
//     }
//     // console.log(numbers[i]);

// }
// console.log(getEven);

// this is one way
// for(let even of numbers){
//     if(even % 2 === 1){
//         continue;

//     }
//     console.log(even);
// }



// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**
// `var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

// **Output:**

// `'TomTimTinTik'`

// ---

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
var string = (``);
for(var i = 0; i < numbers.length; i++){
  string += numbers[i];
}
console.log(string);

// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
// `const statement = 'I am a hard working person'`

// **Output:**

// `'person working hard a am I'`

// ---
const statement = 'I am a hard working person';

console.log(statement);

 let str = statement.split(" ");
        str.reverse();
        str = str.join(" ");
        console.log(str);