const express = require('express')
const app = express()
const controller = require('./controller')

const PORT = 4000;
app.listen(PORT, () => { 
    console.log(`Server has started on port ${PORT}`)
})
