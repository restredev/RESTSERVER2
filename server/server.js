const express = require('express')
const app = express()
const bodyParser = require('body-parser');
require('./config/config');


//estos parse son middlewares, y transforman el body de la petición y lo vuelven JSON
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    //Cuando se usa .use es porque son middlewares

app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})

app.post('/usuario', function(req, res) {
    // el req.body arroja el resultado de los parse de arriba. 
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario',
            error: 'Esto es un error'
        });
    } else {
        res.json({
            persona: body
        });

    }


})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/usuario', function(req, res) {
    res.json({
        id
    })
})





app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})