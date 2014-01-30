//require('newrelic');
var express = require('express'), url = require('url');

var app = express();
app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});
app.configure(function() {
  var pub_dir = __dirname + '/public';
  app.set('port', process.env.PORT || 8080);
  app.engine('.html', require('ejs').__express);
  app.set('views', __dirname + '/public');
  app.set('view engine', 'html');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.static(pub_dir));
  app.use(app.router);
});
app.get('/*', function(req, res) {
  if (req.xhr) {
    var pathname = url.parse(req.url).pathname;
    res.sendfile('index.html', {root: __dirname + '/public' + pathname});
  } else {
    res.render('index');
  }
});

app.listen(app.get('port'));