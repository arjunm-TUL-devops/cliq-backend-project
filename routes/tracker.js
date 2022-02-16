const express = require('express')
const router = express.Router();
const Project = require('../models/Project')

router.get('/',(req,res)=>{
    res.send("We are on tracker!")
})

router.post('/', async (req,res)=>{
    const project = new Project({
        name: req.body.name,
        work: req.body.work
    })

    try{
        const savedProject = await project.save()
        res.json(savedProject)
    }catch(err){
        res.json(err)
    }

})

module.exports = router;