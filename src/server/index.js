const express = require('express');
const os = require('os');
const cors = require('cors');
require('dotenv').config();

const init = async () => {

    const app = express();

    app.use(cors());
    app.use(express.static('dist'));

    // create a GET route
    app.get('/api', (req, res) => res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }));

    app.get('/api/network', (req, res) => {
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    });

    app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
}

init();