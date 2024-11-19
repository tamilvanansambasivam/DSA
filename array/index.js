// common operations

// Accessing Elements

let arr = [10, 20, 30];
console.log(arr[0]); // 10
console.log(arr); // [10,20,30]
arr[1] = 25; // modify element

console.log(arr); // [10,25,30]

// Adding Elements

arr.push(40);
arr.unshift(0);

console.log(arr);

// Removing Elements

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
