var http = require('http');

var url = 'http://intelyzine.com/api/v1/classroom_bs';

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var responseB = JSON.parse(body);
        console.log("Got a response: ", responseB);
        console.log(responseB)
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});
