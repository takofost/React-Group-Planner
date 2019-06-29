var http = require('http');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var express = require('express'),
	app = module.exports.app = express();
	
var server = http.createServer(app);
var io =module.exports.io = require('socket.io').listen(server); 

const PORT = process.env.PORT || 3231;

var api=require('./modules/module');
app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const SocketManager = require('./SocketManager')
// Test API
app.get("/api/test",function(req, res) {
    res.json("its working!");
});

app.use('/api', api);


io.on('connection', SocketManager)
if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../build/index.html'));
    });
  }
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


 //pass a http.Server instance
server.listen(PORT,()=>{
  console.log("Connected to port:" + PORT);
});  
