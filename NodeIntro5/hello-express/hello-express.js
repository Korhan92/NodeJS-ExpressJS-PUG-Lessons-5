const express = require('express')

const app = express()


app.get('/',(req,res)=>{
 res.send("Hello ExpressJS!!")
})

app.get('/about',(req,res)=>{
    res.send("Hello ExpressJS from abou page.")
   })
   

app.listen(3000,()=>{
    console.log("ExpressJS running")
})