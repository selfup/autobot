var http = require('http');

var url = 'http://intelyzine.com/api/v1/classroom_bs';

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var responseB = JSON.parse(body);
        var responseBStr = JSON.stringify(body);
        var jsonB = JSON.parse(responseBStr);
        console.log(responseB);
        console.log(responseBStr);
        console.log(jsonB);
    });
}).on('error', function(e){
      console.log("Error: ", e);
});
