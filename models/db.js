var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/parking';
if(process.env.NODE_ENV == 'production'){
  dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

//Send messages to console so we know we have connected ok
mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to ' + dbURI);
})

mongoose.connection.on('error', function(err){
  console.log('Mongoose connecttion error ' + err);
})

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
})

gracefulShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  })
}

//App Termination
process.on('SIGINT', function(){
  gracefulShutdown('app termination', function(){
    process.exit(0);
  })
})

//Heroku Termination
process.on('SIGTERM', function(){
  gracefulShutdown('Heroku app termination', function(){
    process.exit(0);
  })
})

require('./spaces');
