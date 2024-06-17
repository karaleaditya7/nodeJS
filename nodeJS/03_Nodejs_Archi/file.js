const fs = require("fs")

// console.log("1")

// // Blocking
const result = fs.readFileSync("contacts.txt", "utf-8")
console.log(result)

console.log("2")

// here execution took place from top to bottom ,
// o/p
// 1
// 9665111399
// 2

// Now we are going to perform non blocking operatios

// console.log("1")

// //Non Blocking
// const result = fs.readFile("contacts.txt", "utf-8", () => {
//     console.log(result)

// })

// console.log("2")

// o/p is 
// 1
// 2

// as middle function took time, so it skipped it ans executed last function first,it didnt wait for toeexecute 2nd function