let db  = require('../utilities/SQL');
let Authentication  = require('../utilities/Authentication');
let bcrypt = require('bcrypt-nodejs');

module.exports = function(app) { 

    // POST /api/user
    app.post('/api/user', function(request, response){

        let username = request.body.username;
        let password = request.body.password;

        let salt = bcrypt.genSaltSync(10);
        let passwordHash = bcrypt.hashSync(password, salt);
        
        db.query('SELECT * FROM `users` WHERE `username` = ?', username, function (error, results) {
            
            // username does not exist
            if(results.length === 0) {
                db.query('INSERT INTO `users` SET ?', { 'username': username, 'password': passwordHash }, function (error) {
                    if(error) {
                        response.status(500).send({ error: 'Error adding user' });
                    } else {
                        response.json({
                            'username': username
                        });
                    }

                });
            } else { // username already exists
                response.status(403).send({ error: 'User already exists' });
            }
        });        

    });

    // POST /api/login
    app.post('/api/login', Authentication.BasicAuthentication, function(request, response){

        // username was set via middleware
        if(response.pageInfo.user.username) {
            response.json(response.pageInfo.user);
        } else {
            response.status(401).send({ error: 'Unauthorized' });
        }
        
    });

    // POST /api/logout
    app.post('/api/logout', function(request, response){
         response.status(401).send({ error: 'Unauthorized' });
    });

}
