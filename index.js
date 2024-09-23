import express from 'express'
import ejs from 'ejs'
import bodyParser from 'body-parser'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import sillyname from "sillyname"
import generateStupidName from 'sillyname'
import { generateFromEmail, generateUsername } from "unique-username-generator";
const app = express()
const _dirname=dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended:true})) //middelware
const port = 3000

function current_date(){
	const today = new Date();
const day = String(today.getDate()).padStart(2, '0'); // "14"
const month = String(today.getMonth() + 1).padStart(2, '0'); // "09"
const year = today.getFullYear(); // "2024"

const formattedDate = `${day}/${month}/${year}`; // "14/09/2024"
return formattedDate

}
app.get('/', (req, res) => {
	var name = generateUsername("-");
	res.render('index.ejs', {
		message: "Hello",
		name: name
	});
})
app.post('/date',(req,res)=>{
	console.log(current_date())
res.render('submit.ejs',{date:current_date()})
})
app.post('/post', (req, res) => {
console.log(req.body)
var dustbin ="Hi there! Whats up?"
var dust ="Hi there?"
})

app.listen(port, () => {
	console.log(`Server is running on port:${port}`)
})
