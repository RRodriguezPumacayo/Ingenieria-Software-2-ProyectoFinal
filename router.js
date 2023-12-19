let recipes = require('./api/recipes');
let users = require('./api/users');
let ingredients = require('./api/ingredients');
let directions = require('./api/directions');

module.exports = function(app){ 

    // index.html
    app.get('/', function(request, response){
        response.render('index', { });
    });

    users(app);
    recipes(app);
    ingredients(app);
    directions(app);

};

