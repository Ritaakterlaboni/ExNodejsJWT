function testMiddleware(req, res, next){
  
    if(req.headers.authorization == 12345){
        next();
    }
    else{
        res.send("error")
    }
}

//parameter a next dile ai file ar pore baki ja ase sob kaj korbe 

module.exports = testMiddleware