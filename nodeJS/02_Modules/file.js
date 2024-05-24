const fs = require("fs")


// Sync..
// fs.writeFileSync("./test.txt", "Hey there")

// Async...
// fs.writeFile("./test.txt", "Hello world Async", (err) => {})


// Async..
const result = fs.readFileSync("./contacts.txt", "utf-8")
console.log(result)

// Sync...
// fs.readFile("./contacts.txt", "utf-8",(err, result)  => {
//     if (err){
//         console.log("Error", err)
//     }
//     else {
//         console.log(result)
//     }
// })

fs.appendFileSync("./test.txt", `${Date.now()} hey there \n`)

// Copy file from existing file
// fs.cpSync("./test.txt", "./copy.txt")

// Delete a file
// fs.unlinkSync("./copy.txt")

// Create a folde
fs.mkdirSync("my-docs")