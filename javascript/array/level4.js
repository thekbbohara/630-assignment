const arr = ['ram','shyam','hari']

//Q1
//remove shyam
// expected output 
// ['ram', 'hari']
//syntax
const output = arr.filter((item)=>{
  return item != "shyam" 
})
console.log(output)

//Q2 count total strings which have length 4
//expected output : 1
let total = 0
arr.forEach((item)=>{
    // // yedi item.length === 4, total ma add 1
    if(item.length === 4) {
    total++
  }
})
console.log({total})
