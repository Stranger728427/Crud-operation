import userModel from "../models/userModel.js"

class UserController{
 
    static createDoc = async(req,res) =>{
        try{
         const {name,age,address}=req.body
         const doc = new userModel({
            name:name,
            age:age,
            address:address
         })
         const result = await doc.save();
         //console.log(req.body); 
         res.redirect('/user')
        }
        catch(error){
            console.log(error)
        }
    }
 
    static getAllDoc = async(req,res) =>{
      
        try{
           const result = await userModel.find()
        //    console.log(result)
        
           res.render('index',{data:result})
        }
       catch(error){
        console.log(error)
       }
    }

    static editDoc = async(req,res) =>{
           //console.log(req.params.id)
        try{
           const result = await userModel.findById(req.params.id)
           console.log(result)
            res.render('edit',{data:result})
        }
        catch(error){
            console.log(error)
        }

    }

    static updateDoc = async(req,res) =>{
        try{
            const result = await userModel.findByIdAndUpdate(req.params.id,req.body)
            //console.log(result)
            res.redirect('/user')
        }
        catch(error){

        }
    }

    static deleteDoc = async(req,res) =>{

        try{
           const result = await userModel.findByIdAndDelete(req.params.id)
           console.log(result)
            res.redirect('/user')
        }
        catch(error){
            console.log(error)
        }
    }



}

export default UserController;