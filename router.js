const recipes = require('./api/recipes');
const users = require('./api/users');
const ingredients = require('./api/ingredients');
const directions = require('./api/directions');

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

