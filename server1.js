var http=require("http");
var serv=http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('<marques>Smashing Node!</marques>');

});
serv.listen(3000);
