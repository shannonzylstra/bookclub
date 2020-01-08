// Required node modules
let express = require('express')

// Declare express app variable
let app = express()

// Set up any middleware

// Add any controllers we have

// Add home or catch-all routes
app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
})

app.listen(8000, () => {
    console.log('💻 : running on port 8000')
})