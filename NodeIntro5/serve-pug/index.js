//Created By "node-express" snippet
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index',{name:"Gennaro",phone:"(319) 468-6759 x5121",title:"Dynamic Marketing Facilitator"}))


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 