
const productsrouter = require("./product.router")
const homerouter = require("./home.router.js")

module.exports=(app)=>{
    // app.get("/",(req,res)=>{
    //     res.render("client/pages/home/index.pug")
    
    // })
    // trang danh sach sản phẩm 
    app.use("/products",productsrouter)
    app.get("/",homerouter)


}