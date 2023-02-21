var mysql2 = require('mysql2');
const { config } = require('../constant')

var con = mysql2.createPool({

});

module.exports = con