
const express = require('express'); 
const app = express(); 
const path = require('path');
// port to list on//
const PORT  = process.env.PORT || 8080;


//return to homepage

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')))

//applying routers//

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));


//call//
app.listen(PORT, () => {
    console.log('server is running'); 
})