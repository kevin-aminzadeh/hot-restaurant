const express = require('express'); 
const app = express(); 
const path = require('path');
// port to list on//
const PORT  = process.env.PORT || 8080;

var tables = [];
var waitlist = [];

//return to homepage

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')))

//applying routers//

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/tables',(req,res) => res.json(tables));
app.get('/api/waitlist',(req,res) => res.json(waitlist));

app.post('/api/tables',(req,res) => {
    const newTable = req.body;
    if (tables.length < 5) {
        tables.push(newTable);
    } else {
        waitlist.push(newTable);
    }
    res.json(newTable);
});

//call//
app.listen(PORT, () => {
    console.log('server is running'); 
})