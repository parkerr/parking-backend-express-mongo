var mongoose = require('mongoose');
var space = mongoose.model('Space');

module.exports.getAllSpaces = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.getOneSpace = function(req, res) {};
module.exports.updateOneSpace = function(req, res) {};



var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};



