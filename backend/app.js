const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const portNum = process.env.PORT

const app = express()

app.listen(portNum,(err)=>{
   if (err)  console.error('Something went wrong')
   else console.log('Server is working fine',portNum)
})