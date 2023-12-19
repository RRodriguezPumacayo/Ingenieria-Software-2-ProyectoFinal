let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'recipebook',
    multipleStatements: true  
});
connection.connect(function(err) {
    if (err) {
        console.error('Error: Could not connect to MySQL...\r\n');
        console.error(err.stack);
        return;
    }
    console.log('Connected to MySQL: Connected as thread ID: ' + connection.threadId);

});

module.exports = connection;