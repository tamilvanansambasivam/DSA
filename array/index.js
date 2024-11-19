// Perform some operation like access, add, remove

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

// for loop

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of
for (let num of arr) {
  console.log(`arr:${arr} \nnums:${num}`);
}

// for each
arr.forEach((num, index) => console.log(num, index));
