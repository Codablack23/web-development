//
const name = "Jane Doe"

const printRandomNumber = ()=>{
    console.log(Math.random() * 10)
}
const dog = {
    name:"bingo",
    age:7,
    color:"blonde",
    isGerman:false,
    sizes: [20,40,50],
    breed:"Golden Retriever",
    bark(){
        console.log("bark")
    },
    changeProps(_name,_age){
        this.name = _name
        this.age = _age
    }
}

//destructuring of objects
// const {name:dogName,age:dogAge,color,breed} = dog

// //changing values
// console.log(dog["age"])
// dog["age"] = 12

// console.log(dog["age"])

// //spread operator
// const dog2 ={
//     ...dog,
//     legs:4,
//     gender:"male"
// }
// dog.bark()

// printRandomNumber()

// console.log(dog)

dog.gender = "male"
dog.jump = function(){
    console.log("Jump")
}

// console.log(dog)

//object
function Dog(name,age,color,isGerman){
    this.name = name
    this.age = age
    this.color = color
    this.isGerman = isGerman
}

const dog1 = new Dog("bullet",10,"black",true)
const dog2 = new Dog("billy",5,"blonde",false)

dog1.gender = "male"
dog2.gender = "female"
console.log(dog1)
console.log(dog2)


