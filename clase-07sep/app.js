const express = require('express');
const app = express();
const port = 3300;

app.use(express.json());

app.get('/', (req, res, next) => {
    return res.send('Hello world');
})

app.get('/json', (req, res, next) => {
    return res.status(200).json({ username: 'AngelZ'});
})

app.listen(port, () => {    
    console.log(`Server escuchando en puerto ${port}`);
});