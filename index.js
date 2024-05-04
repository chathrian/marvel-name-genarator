import express from "express"
import names from "marvel-dc-name-generator";
import { mongoose } from "mongoose";
import { Marvelname } from "./models/marvelname.js";

const app = express()
const port = 3000

let db = async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');}
  

app.get('/', (req,res)=>{
    // const marvelname = new Marvelname({
    //     Uname: uname,
    //     Mname: name,
    //     Num: randomNumber
    // })
    // marvelname.save()
    res.render('index.ejs');
})

app.get('/generate', (req, res) => {
    const name = names.generate();
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ name, randomNumber });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })