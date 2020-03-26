const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

//routing
app.use('/static', express.static('public'))
app.get('/first', (req, res) => {
    res.set('Content-Type', 'text/html');

    res.sendFile(__dirname+'/public/web.html');
})

app.get('/second', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(__dirname+'/index1.html');
})

app.get('/third', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(__dirname+'/index2.html');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))