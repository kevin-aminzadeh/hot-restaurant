const express = require('express'); 
const reserveRoute = express.Route(); 

//applying data//

const reservationData = require('../data/reservationData')
const waitListData = require('../data/waitlistData')

reserveRoute.get('/', (req, res) => {
    res.send('/reserve'); 
}); 
