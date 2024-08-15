//arrays
const numArr = [1,2,3,4,5,6,7,8,9,10,11,12] //78
// console.log(numArr)

// for(let i=0;i < numArr.length;i++){
//      numArr[i] = numArr[i] ** 2
// }

// console.log(numArr)
// numArr.length // 7
// console.log(numArr)
// const lastItem = numArr.pop()
// console.log(lastItem)
// console.log(numArr)
// numArr.push(10)
// console.log(numArr)

// const firstItem = numArr.shift()
// console.log(firstItem)
// console.log(numArr)
// //array methods

// numArr.unshift(23)
// console.log(numArr)

//array interation methods\
//map
const squareNumbers=(item) => item ** 2
const squaredNumbers = numArr.map(squareNumbers)

// console.log(squaredNumbers)
// console.log(numArr)

//filter
const removeOddNumbers = (item) => item % 2 === 0

const evenNumbers = numArr.filter(removeOddNumbers)
// console.log(numArr)
// console.log(evenNumbers)

// find method
const findtwo = (item) => item  === 34
// const numbertwo = numArr.find(findtwo)
// console.log(numbertwo)

//some
const checkNumbers = (item) => item > 12

const isGreater = numArr.some(checkNumbers)
// console.log(isGreater)

const checkNumber2 =(item) => item > 4
const check = numArr.every(checkNumber2)
// console.log(check)

const sumAllNumbers = (a,b) =>  a + b
const sum = numArr.reduce(sumAllNumbers,0)
console.log(sum)