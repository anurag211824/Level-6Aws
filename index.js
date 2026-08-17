import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT =  process.env.PORT

const app = express()
app.use(express.json())



app.get("/",async(req,res)=>{
    res.status(200).json({message:"hello from aws-anurag all things fixed"})
})


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started on ${PORT}`)
})