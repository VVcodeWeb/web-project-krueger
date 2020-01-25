const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()


const port = 3000

const viewsPath = path.join(__dirname, '../templates')
app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.set('views', viewsPath)

app.use(express.static(path.join(__dirname, '../public'))) 

app.get('', (req, res) => {
    res.render('index', {
        title: 'Krüger Bedachnungt',
        createBy: 'V.V'
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})