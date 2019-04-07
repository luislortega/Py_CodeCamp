const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 8080;
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/api/v2/denue/:tipoNegocio/:estado/:ciudad/:token',
    (req, res) => {
        if(req.params.token != 'a112-233d-aa23-dsaa-sse2'){
            res.send("Token incorrecto.")    
        }
        res.send(req.params);
    }
);

app.listen(PORT, err => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`🚀 BACKEND RUNNING AT PORT ${PORT}`);
    }
});