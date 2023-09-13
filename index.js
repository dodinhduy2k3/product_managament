const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT;





app.set("views","./views")
app.set("views engine","pug")

const router = require("./router/client/index.router")
// // trang chủ
app.use(express.static("public"))

router(app)

// app.get("/",(req,res)=>{
//     res.render("client/pages/home/index.pug")

// })


// // trang danh sach sản phẩm 
// app.get("/products",(req,res)=>{
//     res.render("client/pages/products/index.pug")

// })

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})