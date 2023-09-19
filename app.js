const express = require('express');
const app = express();
const bodyParse = require('body-parser');

app.set('view engine', 'ejs')
app.use(bodyParse.urlencoded({extended: true}));

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/matricula', (req, res) => {
    const user = req.body.user;
    const password = req.body.password

    if (user === "user" && password === "1234"){
        res.render('matricula');
    }else{
        res.render('login')
    }
    //console.log(`user: ${user}, password: ${password}`)
})

app.post('/confirmacion', (req, res) => {
    let curso = req.body.cursoSelect;
    const modulos = req.body.modulosSelect.toUpperCase();
    const metodoPago = req.body.pagoSelect.toUpperCase();
    const totalPago = req.body.tPago;
    switch(curso) {
        case 'java':
            curso = "Java"
            break;
        case 'php':
            curso = "PHP"
            break;
        case 'dotnet':
            curso = ".Net"
            break;
    }
    //console.log(`${curso}, ${modulos}, ${metodoPago}, ${totalPago}`)
    res.render('confirmacion', {curso, modulos, metodoPago, totalPago})
}) 


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})