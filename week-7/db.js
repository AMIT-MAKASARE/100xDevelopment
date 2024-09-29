const mongoose=require("mongoose");
const { title } = require("process");
const { stringify } = require("querystring");
const Schema =mongoose.Schema;
const ObjectId=mongoose.ObjectId

const User=new Schema({
    email:{type:String,unique:true},
    password:String,
    name:String
})

const Todo= new Schema({
  title: String,
   done: Boolean,
  userId: ObjectId
});

const UserModel=mongoose.model('users',User)
// const todoModel=mongoose.model('todos',todo)

module.exports={
    UserModel:UserModel
    // TodoModel:TodoModel
}