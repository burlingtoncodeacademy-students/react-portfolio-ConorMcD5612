const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static("./client/build"))

app.get("*", (request, response) =>{
    //dirname just gets you to this folder(full absolute file)
    response.sendFile(__dirname+ "/client/build/index.html")
})
//will run when start listen on port
app.listen(port, ()=>{
    console.log(`Listening on port:${port}`)
})