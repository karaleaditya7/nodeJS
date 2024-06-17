const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express()

const PORT = 8000

app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
    console.log("hello from middleware 1")
    // return res.end("hey")
    next()
})

app.get("/users", (req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

app.get('/api/users', (req,res) => {
    return res.json(users)
})

// :id ==> dynamic id 
app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})


app.post("/api/users", (req,res) => {
    // TODO: create user
    return res.json({ status : "pending"})
})

app.patch("/api/users", (req,res) => {
    // TODO: edit user with id
    return res.json({ status : "pending"})
})

app.post("/api/users", (req,res) => {
    // TODO: delete user with id
    const body = req.body
    console.log("Body".body)
    return res.json({ status : "pending"})
})


app.listen(PORT,() => console.log(`Server started running on port: ${PORT}`)
)
