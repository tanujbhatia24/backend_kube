const Student = require('../models/student.model')

function Register (req, res){

    console.log(req.body)
    let date = new Date()
    const newStudent = new Student({...req.body})
    console.log(newStudent)
    newStudent.save(function(err,newSavedStudent){
        if(err){
            res.json({message:'not registered',err:err}).status(200)
        }else{
            console.log({newSavedStudent})
            res.json({message:'registered'}).status(200)
        }
    })
    // res.json({message:'here'}).status(200)
}

module.exports = {Register}

