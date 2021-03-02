const express = require('express')
const app = express()
const db = require('./db')
app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(3000,()=>{
    console.log('Server is running!')
})
db.on('connected',console.error.bind(console,'数据库连接成功'))
db.on('error', console.error.bind(console, 'MongoDB connection error:'))