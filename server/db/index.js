const mongoose = require('mongoose')
const uri = "mongodb://127.0.0.1:27017/runoob"
mongoose
    .connect(uri,(err)=>{
        if(err){
            console.log('连接失败')
        }
        else{
            console.log('连接成功')
        }
    })

const db = mongoose.connection
var Schema = mongoose.Schema;
var mySchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"female"
    },
    address:String
})
var myModel = mongoose.model('film',mySchema)
myModel.create({
    name:"孙悟空",
    age:18,
    gender:"male",
    address:"花果山"
})
myModel.create({
    name:"猴子",
    age:18,
    gender:"male",
    address:"花果山"
})
//module.exports = db