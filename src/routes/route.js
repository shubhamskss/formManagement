const express=require('express')
const router=express.Router()

const formController=require("../controllers/form")
router.post("/form",formController.createForm)
router.post("/fill-data",formController.fillData)
router.get("/fill-data",formController.getFIllData)
module.exports=router;