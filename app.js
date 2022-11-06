//import express
const express = require('express')
const path = require('path')
const app = express()
const exphbs = require('express-handlebars')
const classRouter = require("./routes/classRouter")

app.use(express.static('public'))// define where static assets are



app.engine('hbs',exphbs.engine({defaultlayout:'main', extname: 'hbs'}))

app.set('view engine','hbs')

app.get('/', (req,res) => {
    console.log("WORKING")
    res.render('index.hbs')
});

app.get('/classes',(req,res)=>{
    console.log("Loading Classes page")
    res.render("classesPage.hbs")
});

app.get('/about',(req,res)=>{
    console.log("Loading AboutUS page")
    res.render("aboutUs.hbs")
});


app.get('/contact',(req,res)=>{
    console.log("Loading Contact Us page")
    res.render("contactus.hbs")
});



app.use("/get-classes",classRouter)

// app.get("/get-classes", (req,res)=> {
//     res.render("classesPage.hbs",data = classRouter)
// })





app.get('/classes/attend',(req,res)=> {
    console.log("form submit")
    res.render("/classes")

});






app.listen(3000, () => {
    console.log("App is listening on port 3000")
});

