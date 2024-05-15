const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()

const productSchema=mongoose.Schema({
    "title":String,
    "price":Number,
    "description": String,
    "category": String,
    "image": String
})

const Product=mongoose.model("Product",productSchema)

mongoose.connect(process.env.URL).then(res => {
    console.log("db connected")
})

app.get("/api/products",async (req,res)=>{
const response= await Product.find()
res.send(response)
})




app.get("/api/products/:id",async (req,res)=>{
    const {id}=req.params
    const response= await Product.findById(id)
    res.send(response)
})
app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    const items = await Product.find()
    res.send(items)
})

app.post("/api/products",async (req,res)=>{
    const newItem=new Product({...req.body})
    await newItem.save()
  res.send("item created")
})
    
    
app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndUpdate(id, { ...req.body })
    const items = await Product.find()
    res.send(items)
})

app.listen(process.env.PORT, (req, res) => {
    console.log("api running on 8080")
})