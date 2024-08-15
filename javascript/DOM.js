//DOM(Document Object Model)
// console.log(document)

//Methodos of accessing elements


//getting elements by tagname
// const divElements = document.getElementsByTagName("div")//
// const div = divElements[0]

// //getting elements by className
// const titleElements = document.getElementsByClassName("title")//
// console.log(titleElements)
// const title1 = divElements[0]

// //getting elements by IdName
// const main = document.getElementById("main")
// console.log(main)

// //query Seelctor
// const el = document.querySelectorAll("#title")
// const el = document.querySelector("#title")

//manipulating  Elements

// const titles  = document.querySelectorAll(".title")


// for (let i = 0;i < titles.length; i ++){
//     const title = titles[i]
//     // console.log(title.innerHTML)
//     title.innerHTML = `<b>${title.innerHTML} ${i}</b>`
// }

// // Manipulating Styles with the DOM
// const main = document.querySelector("#main")
// console.log(main)

// main.style.display = "flex"
// main.style.alignItems = "center"
// main.style.maxWidth = "100px"
// main.style.overflow = "auto"
// background-color:"#000000"

// events listener
// const handleClick = (e)=>{
//     const bg = main.style.backgroundColor
//     if(bg === "red"){
//         main.style.backgroundColor = "green"
//         return null;
//     }
//     main.style.backgroundColor = "red"
// }
// const handleInterval = ()=>{
//     const bg = main.style.backgroundColor
//     if(bg === "red"){
//         main.style.backgroundColor = "green"
//         return null;
//     }
//     main.style.backgroundColor = "red"
// }
// setInterval(handleInterval,5000)
// main.addEventListener("click", handleClick)

//handling classess
// const clickBtn = document.querySelector("#clickme")
// const handleClick = ()=>{
//     clickBtn.classList.toggle("btn-lg")
//     clickBtn.classList.toggle("btn-sm")
// }
// clickBtn.addEventListener("click",handleClick)

//handling forms
// const form = document.querySelector("#register-form")
// const errorEl = document.querySelector(".form-error")
// const handleSubmit = (e)=>{
//   e.preventDefault()
//   const email = form["email"].value
//   const password = form["password"].value
//   const phoneNumber = form["phoneNumber"].value
//   const confirmPassword = form["confirmPassword"].value
//   const name = form["name"].value

//   if(password !== confirmPassword){
//     console.log("passwords do not match")
//     errorEl.innerHTML = "passwords do not match"
//     return null;
//   }
//   errorEl.innerHTML = ""
//   console.log("email:",email)
//   console.log("password:",password)
//   console.log("name:",name)
//   console.log("phone number:",phoneNumber)
//   console.log("confirm Password:",confirmPassword)
// }
// form.addEventListener("submit", handleSubmit)

{/* <p id="kelvin-value">0</p>
<input type="text" type="number" id="celsius-value">
<button type="button" class="convert-btn">Convert</button> */}

const celsuisEl = document.querySelector("#celsius-value")
const output = document.querySelector("#kelvin-value")
const btn = document.querySelector(".convert-btn")

const convert = (e)=>{
    // K = C + 273
    let result = 273
     if(celsuisEl.value){
        result = parseFloat(celsuisEl.value) + 273
     }
     output.innerHTML = `${result} K`
}

celsuisEl.addEventListener("input",convert)