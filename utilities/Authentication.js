const basicAuth = require('basic-auth');
const database = require('./SQL');
const bcrypt = require('bcrypt-nodejs');

exports.BasicAuthentication = function(request, response, next) {
 
    function unauthorized(response) {
        response.set('WWW-Authenticate', 'Basic realm=Protected Area');
        return response.send(401);
    };
 
    const user = basicAuth(request);

    if (!user?.name || !user?.pass) {
        return unauthorized(response);
    };
    
    database.query('SELECT * FROM `users` WHERE `username` = ?', [user.name], function (error, results, fields) {
        if(results.length > 0 && bcrypt.compareSync(user.pass, results[0]['password'])) {
            response.pageInfo.user = {
                'id': results[0]['id'],
                'username': results[0]['username']
            }
            return next();
        } else {
            return unauthorized(response);
        }
    });
};