var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

// 1) Modify the port to use whatever heroku gives us.
var server = app.listen(process.env.PORT || 5403, function() {
	console.log('Express server listening on port ' + server.address().port);
});
