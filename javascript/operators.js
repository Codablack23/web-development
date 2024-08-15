// OPERATORS
let x = 10
let y = 15
let a = "10"

console.log(x)

// arithmetic operators (+) (-) (/) (*) (**) (%)
let sum = `the sum is :${x + y}`
let difference = `the difference : ${x - y}`
let division = `the division :${x/y}`
let multiple = `multiple ${x * y}`
let power = `power: ${x**y}`
let remainder = `remainder ${x % y}`

// console.log(multiple, division,sum, difference, power, remainder)

// comparison operators (>) (<) (>=) (<=) (==) (===) (!=) (!==)
let gt = x > y //false
// console.log(gt)

let lt = x < y  // true
// console.log(lt)

let gte = x >= y //false
// console.log(gte)

let lte = x <= y //true
// console.log(lte)

let et = x==y //false
// console.log(et)

let ne = x != y //true
let et2 = x===y //false
// console.log(ne)
// console.log(et2)

let ne2 = x!==y //true
// console.log(ne2)

//logical operators
// AND(&&) OR(||) NOT(!)

const logic = gt && lt && lte // false
const logic2 = (lt && gt ) || lte // true
const logic3 = !(lt || lte) && (gte && gt)//false
// console.log(logic)
// console.log(logic2)
// console.log(logic3)


// assignment operators
// (=), (+=), (-=) (*=), (/=) (%=),(**=),(++),(--)
x += 10; // x = x + 10
console.log(x)

x %= 2 //  x = x % 2 
console.log(x) //0

x++
console.log(x)
