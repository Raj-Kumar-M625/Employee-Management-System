const express = require('express')
const bodyParse = require('body-parser')
const mongoose = require('mongoose')
const User = require('./user')

app = express()
app.set('view-engine','ejs')
app.engine('ejs',require('ejs').__express)
app.use(bodyParse.urlencoded({extended:false}))


mongoose.connect("mongodb://localhost/employeeDb")

app.get("/",async (req,res)=>{
    const employeeData = await User.find()
    res.render("index.ejs")
})


app.post("/addData",async (req,res)=>{
    
     const user = await User.create(req.body)
     user.save()
     
     res.status(200).render('index.ejs')
     
})

app.get("/edit/:id",async (req,res)=>{ 
    const user1 = await User.findOne({_id:req.params.id})
    res.render("edit.ejs",user=user1)
})

app.get('/view',async (req,res)=>{
   const allEmployee = await User.find()
   res.render('data.ejs',data = allEmployee)


})

app.get("/delete/:id",async (req,res)=>{
    const user = await User.deleteOne({_id:req.params.id})
    const allEmployee = await User.find()
    res.render('data.ejs',data = allEmployee)
    
   
})

app.post("/update/:id",async (req,res)=>{
     const edit_user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
     edit_user.save()

    const allEmployee = await User.find()
    res.render('data.ejs',data = allEmployee)

    })

app.listen(8080,()=>{
	console.log('Connected')
})