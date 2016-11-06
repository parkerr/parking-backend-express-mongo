var mongoose = require('mongoose');
var spaces = mongoose.model('Space');

module.exports.getAllSpaces = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};


module.exports.getAllSpaces = function(req, res){
  spaces.find().exec(function(err, space){
    
    if(!space.length){
      
      sendJsonResponse(res, 404, {"message" : "no spaces found"});
      return
      
    } else if(err){
      
      sendJsonResponse(res, 404, err);
      return
    }
    sendJsonResponse(res, 200, space);
  });
  
};




module.exports.getOneSpace = function(req, res) {
  if (req.params && req.params.spacenumber){
    
    spaces.find({number : req.params.spacenumber}).exec(function(err, space){
      if(!space.length){
        
        sendJsonResponse(res, 404, {"message" : "space number not found"});
        return
        
      } else if(err){
        
        sendJsonResponse(res, 404, err);
        return
      }
      sendJsonResponse(res, 200, space);
    });
  } else {
    sendJsonResponse(res, 404, {"message" : "no space number in request"});
  }    
};

module.exports.makeSpaceUnavailable = function(req, res){
spaces.findOneAndUpdate({number: req.params.spacenumber}, {$pull: {availableOn: req.params.date}}, {new: true}, function(err, space){
          sendJsonResponse(res, 200, space);
});
};

module.exports.makeSpaceAvailable = function(req, res){
spaces.findOneAndUpdate({number: req.params.spacenumber}, {$push: {availableOn: req.params.date}}, {new: true}, function(err, space){
          sendJsonResponse(res, 200, space);
});
};

module.exports.updateOneSpace = function(req, res) {};



module.exports.createSpace = function(req, res){
spaces.create({number: 1}, function(err, card){
sendJsonResponse(res, 200, card);
});

};



module.exports.createNextSpace = function(req, res){
 spaces.findOne().sort('-number').exec(function(err, item){
   var maxnumber = item.number + 1;
  spaces.create({
	                 number: maxnumber
				                                                                     }, function(err, card){
													     if(err){
														         sendJsonResponse(res, 404, err);
															   } else {sendJsonResponse(res, 200, card);
															   };
												     }
	       )


 });};



var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};



