const express = require('express')
const app = express()
const path = require('path')
const port = 3000

var duongDanPublic = path.join(__dirname, 'public')

app.use('/public', express.static(duongDanPublic))
app.get('/', (req, res) => {
    var duongDan = path.join(__dirname, 'index.html')
    res.sendFile(duongDan)
})

app.get('/index.html', (req, res) => {
    var trangChu = path.join(__dirname, 'index.html')
    res.sendFile(trangChu)
})

app.get('/login.html', (req, res) => {
    var dangNhap = path.join(__dirname, 'login.html')
    res.sendFile(dangNhap)
})

app.get('/contact.html', (req, res) => {
    var lienHe = path.join(__dirname, 'contact.html')
    res.sendFile(lienHe)
})

app.listen(port)