const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('User List')
})

router.get('/new',(req,res)=>{
    res.send('User New Form')
})


// create a user 

router.post('/',(req,res)=>{
    res.send('Create User')
})



//create dynamic route with ":" in the route 

router.get('/:id', (req,res)=>{
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})


//commonly for Users there is the below 

router.get('/:id', (req,res)=>{
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})
router.put('/:id', (req,res)=>{
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})
router.delete('/:id', (req,res)=>{
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})


// the above can be summed up as where we only need to define the route once 

router
    .route("/:id")
    .get((req,res)=>{
        req.params.id
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req,res)=>{
        req.params.id
        res.send(`Get User With ID ${req.params.id}`)
    })
    .delete((req,res)=>{
        req.params.id
        res.send(`Get User With ID ${req.params.id}`)
    })


//Middleware
    router.param("id",(req,res,next,id)=>{
    console.log(req.user)
    next()
})




module.exports = router
