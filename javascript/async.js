//Asynchrounous Javascript
//promises

const handlePromise = (resolve, reject) => {
    let myNum = 6
    setTimeout(()=>{
        myNum += 3
        if(myNum > 10){
            resolve("Promise resolved")
        }else{
            reject("Promise was unsuccessful")
        }
    },3000)

}

const timePromise = new Promise(handlePromise)


const x = 10
const y = 5

// getTime
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })
// .finally(()=>{
//     console.log("Promise is finished")
// })

// async function getTime(){

// }
// const getTime = async function(){

// }
const getTime = async ()=>{
        try {
            const data = await timePromise
            console.log(data)
        } catch (error) {
            console.log(error)
        }finally{
            console.log("We have retrived the data")
        }
}



const z= x +y
console.log(z)

// API
// fetch API

// const postPromise = fetch("https://jsonplaceholder.typicode.com/posts")

// postPromise
// .then((res)=>{
//     res.json().then((data)=>{
//         console.log(data)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Retrieved Post")
// })

// postPromise
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Retrieved Post")
// })

const getPost = async ()=>{
    try {
        const response  = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()
        console.log(posts)
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("loading finished")
    }
}

// getPost()

const shortenAPI = async(link)=>{
    try {
        const res = await fetch("https://cleanuri.com/api/v1/shorten",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            mode: "no-cors",
            body:JSON.stringify({
                url:link
            })
        })
        const data = res.json()
        console.log(data.result_url)
    } catch (error) {
        console.log(error)
    }

}

shortenAPI("https%3A%2F%2Fgoogle.com%2F")
// postPromise
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Retrieved Post")
// })
