const express=require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    obj={
        a:"1",
        b:"2"
    }
    res.json[obj]
})

module.exports=router