const express = require('express')
const router = express.Router()
const User = require('../models/user')

// POST /
// create a user
router.post('/user',(req,res)=>{
    const user = new User(req.body)  
    user.save(function(err,data){
        if(err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })

})


router.get('/user',(req,res)=>{
    User.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    }); 
})

router.get('/user/:id',(req,res)=>{

    let id = req.params.id;
    User.findById(id,function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    }); 
})

router.get('/user/:name',(req,res)=>{

    let name = req.params.name;
    User.findOne({name:name},function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    }); 
})

router.delete('/user/:id', function(req, res) {
    const id = req.params.id
    User.deleteOne({_id:id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("Data deleted");
        }
    });  
});

router.put('/user/:id', function(req, res) {
    const id = req.params.id
    User.findByIdAndUpdate(id, 
    req.body, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});


module.exports = router