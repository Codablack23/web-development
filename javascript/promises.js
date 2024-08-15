// const totalPromise = new Promise((resolve, reject)=>{
//     const amount = 10000
//     setTimeout(()=>{
//         const total = amount  * 3.5
//         if(total > 30000){
//             resolve(total)
//             return;;
//         }
//         reject("An error occured")
//     },10000)
// })

// const x = 10
// const y = 15
// totalPromise
// .then(function(total){
//     console.log("total:", total)
// })
// .catch(function(err){
//     console.log("error:", err)
// })
// .finally(function(){
//     console.log("Promise Finished")
// })

// console.log(x + y)

// APIs
//GET,POST,DELETE,PUT,PATCH/UPDATE

// const postPromise = fetch("https://jsonplaceholder.typicode.com/posts")
// postPromise
// .then(function(response){
//     const jsonData = response.json()
//     jsonData.then(function(data){
//         console.log("posts:", data)
//     })
//     .catch((err) => {
//         console.log("Error:", err)
//     })
// })
// .catch(function(err){
//     console.log("Error", err)
// })
// .finally(()=>{
//     console.log("Fetching is complete!")
// })

// async and await
// async function getPosts(){}
const getPosts = async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/post")
        const posts = await response.json()
        console.log(posts)
    }catch (error) {
        console.log(error)
    }
    finally{
        console.log("Promise Finished")
    }
}

getPosts()