// Creating an array
let numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]); // Output: 1

// Modifying an element
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Inserting an element at the end
numbers.push(6);
console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

// Deleting an element
numbers.splice(2, 1); // Removes one element at index 2
console.log(numbers); // Output: [1, 2, 4, 5, 6]

// Iterating over elements
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

