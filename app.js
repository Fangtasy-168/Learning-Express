const express = require('express');
const app = express()

const port = 3000

app.use('/',express.static(__dirname + "/public"))

app.get("/", (req,res)=>{
    let absolutePath = __dirname + "/views/index.html"
    
    res.sendFile(absolutePath)
})


app.use(express.json())
app.post('/', (req,res)=>{
    const {name} = req.body
    res.send(`Welcome ${name}`)
})

app.listen(port, (error)=>{
    if(!error){
        console.log('Server is Sucessfully Runnning, and App is lisetning on port ' + port)
    }else{
        console.log('Error Occure, Server cannot start', error)
    }   
})

// app.get("/",function(req,res){
//     res.set('Content-Type', 'text/html')
//     res.status(200).send("<h1>Welcome to your Project</h1>")

// })

// app.get("/",(req,res)=>{
//     res.render('.\views\index.html')
// })


// app.get('/users',(req,res)=>{
//     res.send('User List')
// })

// app.get('/users/new',(req,res)=>{
//     res.send('User New Form')
// })




const userRouter = require("./routes/user")


app.use('/users',userRouter)