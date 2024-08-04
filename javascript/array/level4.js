const arr = ["ram", "shyam", "hari"];

//Q1
//remove shyam
// expected output
// ['ram', 'hari']
//syntax
const output = arr.filter((item) => {
  return item != "shyam";
});
console.log(output);

//Q2 count total strings which have length 4
//expected output : 1
let total = 0;
arr.forEach((item) => {
  // // yedi item.length === 4, total ma add 1
  if (item.length === 4) {
    total++;
  }
});
console.log({ total });

// Q3
// count total char
let totalChar = 0;
arr.forEach((str) => {
  totalChar += str.length;
});

console.log(totalChar);

const cartItems=[
{id: 1, product:"hawkins", price:30, quantity:1},
{id: 1, product:"baltra", price:10, quantity:3},
]

//60
const totalPrice = cartItems.reduce((total,curr)=>total+=curr.price * curr.quantity,0)
console.log(totalPrice)
