// input fields
const dayInput = document.querySelector("#day-input")
const monthInput = document.querySelector("#month-input")
const yearInput = document.querySelector("#year-input")

// results
const dayResult = document.querySelector("#day-result")
const monthResult = document.querySelector("#month-result")
const yearResult = document.querySelector("#year-result")

// labels for input
const dayLabel = document.querySelector("#day-label")
const monthLabel = document.querySelector("#month-label")
const yearLabel = document.querySelector("#year-label")

// error elements
const dayError = document.querySelector("#day-error")
const monthError = document.querySelector("#month-error")
const yearError= document.querySelector("#year-error")

const submitBtn = document.querySelector("#submit-btn")

const validateFields = (day,month,year) =>{
    const errorObject = {
        isValid:true,
        day:"",
        month:"",
        year:"",
    }
    if(!day){
        errorObject.day = "This field is required"
    }
    if(!month){
        errorObject.month = "This field is required"
    }
    if(!year){
        errorObject.year = "This field is required"
    }
    if(!(year && month && day)){
        errorObject.isValid = false
    }
    return errorObject;

}

// submit event handler function
const handleSubmit =()=>{
    const dayValue = dayInput.value
    const monthValue = monthInput.value
    const yearValue = yearInput.value
    const error = validateFields(dayValue,monthValue,yearValue)
    const {day,month,year,isValid} = error

   if(day){
        dayError.innerHTML = day
        dayInput.classList.add("error")
        dayLabel.classList.add("error")
   }
   else{
        dayError.innerHTML = ""
        dayInput.classList.remove("error")
        dayLabel.classList.remove("error")
   }
   if(month){
        monthError.innerHTML = month
        monthInput.classList.add("error")
        monthLabel.classList.add("error")
   }
   else{
        monthError.innerHTML = ""
        monthInput.classList.remove("error")
        monthLabel.classList.remove("error")
        
   }
   if(year){
        yearError.innerHTML = year
        yearInput.classList.add("error")
        yearLabel.classList.add("error")
   }
   else{
        yearError.innerHTML = ""
        yearInput.classList.remove("error")
        yearLabel.classList.remove("error")
   }

   console.log(error)
}

submitBtn.addEventListener("click", handleSubmit)


const date = new Date("31-09-2021")
console.log(date)