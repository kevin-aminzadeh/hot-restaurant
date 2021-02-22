  
const express = require('express'); 
const tablesRoute = express.Router();


const reservationData = require('../data/reservationData')
const waitListData = require('../data/waitlistData')



tablesRouter.get('/', (req, res) => {
    res.send('/tables'); 
}); 


module.exports = tablesRoute; 