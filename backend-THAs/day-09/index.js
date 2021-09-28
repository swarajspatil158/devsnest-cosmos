const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.use('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/public/Hello.txt'),'test.txt')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
