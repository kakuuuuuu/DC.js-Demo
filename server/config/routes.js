var model = require('../controllers/controller_template.js');
module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index.html')
  })
}
