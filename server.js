const express = require('express')
let ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
 

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
 console.log("server is up")
})

const projectRouter = require('./Routes/projects.js')
const aboutRouter = require('./Routes/aboutMe.js')
const fitnessRouter = require('./Routes/fitness.js')
const contactRouter = require('./Routes/contact.js' )

app.use(express.static('public'))
app.use('/contact', contactRouter)
app.use('/fitness', fitnessRouter)
app.use('/aboutme', aboutRouter)
app.use('/projects', projectRouter)