//FUNCTIONS

function printOddNumbers(){
    for(let i =0; i < 10; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
const printEvenNumbers = function(){
    for(let i =0; i < 10; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
// printEvenNumbers()
// printOddNumbers()
// printOddNumbers()
// printEvenNumbers()

// Parameters and Arguements

// function increaseNumberbyTen(myNumber=18){
//     console.log(myNumber + 10);
// }
// increaseNumberbyTen(97)

function addTwoNumbers(x,y){
    return x + y
}
const z = addTwoNumbers(10,11)
// console.log("z:",z)
//return
//assignments
//1. create a function that takes a lower or any case string and convert to all upper case
// 2. Create a function that prints all the odd numbers between a certain boundary controlled by your function parameters and arguements
//3. Create a function for grading scores that returns a grade using the scores as inputs

// Arrow functions
const getSum = (x,y)=> x + y //


// Higher Order Functions
const getOperation = (operator = "+")=>{
    const add=(x,y)=>x +y
    const subtract=(x,y)=>x -y
    const multiply=(x,y)=>x * y
    const divide=(x,y)=>x /y

    if(operator == "+") return add;
    if(operator == "-") return subtract;
    if(operator == "*") return multiply;
    return divide;
}

const addTwoNumber = getOperation("+")
const mySum = addTwoNumber(10,11)
// console.log(mySum)

//create a higher order function
// that returns a function for
// printing odd or even numbers
// between 0 -10 based on a parameter value

const printNumbers =(type="even")=>{
    const printEvenNumbers = ()=>{
        for(let i =0;i<10;i++){
            if(i%2 == 0){
                console.log(i)
            }
        }
    }
    const printOddNumbers =() =>{
        for(let i =0;i<10;i++){
            if(i%2 !== 0){
                console.log(i)
            }
        }
    }
    if(type == "odd") return printOddNumbers
    return printEvenNumbers
}

const printEven = printNumbers("even")

const calculate = (operation)=>{
    operation(5,10)
}

const sum = (x,y)=>{
    console.log(x+y)
}
const multiply = (x,y)=>{
    console.log(x * y)
}

// calculate(multiply)

/**
 * Tasks
 * 1. Create a Function that converts temperature from celcius to Kelvin
 * 2. Create a function that converts temperature from Celcius to Farenheit
 * 3. Write a function to find the area of a given Rectangle
 * 4. Write a function to reverse a number
 * 5. Count number of Vowels in String
 * 6. Write a function to generate a random number
 * 7. Write a function to find the count of a letter in a string
"john6" //
 * 
 */
//counts vowels in a string
// a,e,i,o,u
//myName
const countVowels = (str)=>{
  let count = 0
  const myStr = str.toLowerCase()
  for(let i = 0;i < str.length;i++){
    const char = myStr.charAt(i)
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count += 1
    }
  }

  console.log(count)
}

countVowels("create")//3