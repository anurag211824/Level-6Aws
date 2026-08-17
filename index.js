import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT =  process.env.PORT

const app = express()
app.use(express.json())



app.get("/",async(req,res)=>{
    res.status(200).json({message:"hello from aws(ci-cd done now the changes will go to the production automatically)"})
})


app.listen(PORT,()=>{
    console.log("Server started on " + PORT)
})