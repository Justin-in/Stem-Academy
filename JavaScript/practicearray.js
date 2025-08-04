// Week 1 Session 3 Homework: Array Practice

// Task 1: Find Largest Number
// TODO: Write a function to find the largest number in an array

 function findLargest(array){
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
};


function secondlargest(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
   let secondLargest = array[1];
        for (let j = 2; j < array.length; j++) {
            if (array[j] > secondLargest && array[j] < largest) {
                secondLargest = array[j];
            }
        }
    return secondLargest;
    }
// Test your function
let testArray1 = [5, 2, 9, 1, 7, 6];
console.log("Largest number:", findLargest(testArray1)); // Should print 9
console.log("Second Largest number:", secondlargest([5, 2, 9, 1, 7, 6])); // Should print 9

// 2. Merge two sorted arrays into one sorted array
// Task 2: Reverse Array
// TODO: Write a function to reverse an array without using .reverse()
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Test your function
let testArray2 = ["a", "b", "c", "d"];
console.log("Reversed array:", reverseArray(testArray2)); // Should print ["d", "c", "b", "a"]


// Task 3: Remove Duplicates
// TODO: Write a function to remove duplicates from an array
function removeDuplicates(arr) {
    // Your code here
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

// Test your function
let testArray3 = [1, 2, 2, 3, 4, 4, 5];
console.log("No duplicates:", removeDuplicates(testArray3)); // Should print [1, 2, 3, 4, 5]


// BONUS CHALLENGES
// 1. Find the second largest number in an array
// 2. Merge two sorted arrays into one sorted array
// 3. Rotate an array by n positions to the right*/