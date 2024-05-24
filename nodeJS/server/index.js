const http = require("http")
const fs = require("fs")

// const myServer = http.createServer((req, res) => {})

// const myServer = http.createServer((req, res) => {
//     console.log(req.headers)
//     console.log("New req rec")
//     res.end("Hello from server")
// })

// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: New req received\n`
//     fs.appendFile("log.txt", log,() => {
//         res.end("Hello from server again")

//     })
// })  

const myServer = http.createServer((req, res) => {
    // const log = `${Date.now()}:${req.url} New req received\n`
    // fs.appendFile("log.txt", log,() => {
    //     switch(req.url){
    //         case "/":res.end("Homepage")
    //         break
    //         case "/about": res.end("I am aditya")
    //         break
    //         default: res.end("404 Not found")

    //     }
    // })


    switch(req.url){
                case "/":res.end("Homepage")
                break
                case "/about": res.end("I am aditya")
                break
                default: res.end("404 Not found")
    }



}) 


// myServer.listen(8000)

myServer.listen(8000, () => console.log("server started"))
