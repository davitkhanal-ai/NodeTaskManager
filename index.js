const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors') 
const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

const db = mongoose.connection;
db.on('error', ()=>{
    console.log('error connecting db')
})

db.once('open', ()=>{
    console.log("DB connected")
})

app.get('/', (req,res) => {
    res.send('Hello world')
})

const PORT = 3000;

app.listen(3000, ()=>{
    console.log("server is running in port 300")
})



