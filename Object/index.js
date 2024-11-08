let product = {
  id: 1,
};

// create
product.name = "laptop";
product.price = 1000;
product.about = "good product";

// read

console.log(product.name);
console.log(product.price);
console.log(product.about);
console.log(product);
// update

product.price = 500;
console.log(product);

// delete
delete product.about;
console.log(product);
