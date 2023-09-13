
    const express = require("express")
    const router = express.Router()
    const controllers = require("../../controllers/client/products.controllers")
    router.get("/",controllers.index)

    router.get("/add",controllers.add)
    router.get("/edit",controllers.edit)


    module.exports = router;