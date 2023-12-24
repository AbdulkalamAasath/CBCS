const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./BackEnd/Routes/User')
const courseRoute = require('./BackEnd/Routes/CourseRoute')
const HodRoute = require('./BackEnd/Routes/HodRoute')
const HodCourseRoute = require('./BackEnd/Routes/HodCourseRoute')
const StafRoute = require('./BackEnd/Routes/StafRoutes')
const StaffCourseRoute = require('./BackEnd/Routes/StaffCourseRoute')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use('/cbcs/user',userRoute)
app.use('/cbcs/course',courseRoute)
app.use('/cbcs/hod',HodRoute)
app.use('/cbcs/hod',HodCourseRoute)
app.use('/cbcs/staf',StafRoute)
app.use('/cbcs/staf',StaffCourseRoute)
app.use((req, res, next) => {
    console.log(req.path, req.method,req.body)
    next()
  })
  PORT = 4000
 mongoose.connect("mongodb://localhost:27017/CBCS")
 .then(() => {
    console.log('connected to database')
    app.listen(PORT, () => {
      console.log('listening for requests on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
