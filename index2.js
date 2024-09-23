import express from "express"
import ejs from 'ejs'
import bodyParser from 'body-parser'

const app=express()
const port=4000
app.use(bodyParser.urlencoded({extended:true})) //using Middleware: First it receives request from server before handlers
function calc(){
    console.log("This is Calculator")
}
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.post('/submit',(req,res)=>{
    var email=req.body.email // input of email is stored in variable email
    var password=req.body.password //input of password is stored in variable password
    res.send('<h1>User Loginned!</h1>')
    console.log(email)
    console.log(password)
})
app.listen(port,()=>{
    console.log(`Server is running in port:${port}`)
})