module.exports.index = (req,res)=>{
    res.render("client/pages/products/index.pug",
    {
        title: "TRang Danh Sách Sản Phẩm"
    })}
module.exports.add = (req,res)=>{
        res.send("client/pages/products/index.pug")}
module.exports.edit = (req,res)=>{
            res.render("client/pages/products/index.pug")}
        
    
