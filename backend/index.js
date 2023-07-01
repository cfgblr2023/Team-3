const express = require("express")
const cors = require("cors")
const app = express()

app.get('/',(req,res)=>res.json({msg:"hello world"}))
app.use(cors())
app.listen(5000,()=>console.log("Server started!"))
