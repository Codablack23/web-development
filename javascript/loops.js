// for loop, while loop, do-while loop

let x = 15
// while loop
// while(condition){
//     // repeated code
// }
while (x < 50){
    // console.log(x)
    x += 5
}
// console.log("Loop has ended")

//for loop
// for loop(initialization; condition; operation){
//  looped execution
// }
for (let index = 0; index < 10; index++) {
    // console.log(index)
}
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9

//print all odd numbers between 10 and 24
//using while loops
let index = 0
while (index < 25){
    if(index % 2 != 0){
        // console.log(index)
    }
    index += 3
}
// for(let index = 0;index < 25;index++){
//     console.log("")
//     console.log("loop started")
//     console.log(`iteration:${index}`)
//     if(index % 2 == 0){
//        continue;
//     }
//     console.log(index)
//     console.log("Loop ended")
// }

let i = -1
// do {
//     i += 1
//     console.log(i)
// } while (i < 20){
//     console.log(i)
//     i += 1
// };

let a = 0;
while(true){
    a ++;
    if(a > 24){
        break
    }
    console.log(a)
}
