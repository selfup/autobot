var http = require('http');

var url = 'http://intelyzine.com/api/v1/classroom_bs';

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var responseB = JSON.parse(body);

        var variable1 = responseB[0].cohort;
        var variable2 = responseB[0].teacher;

        console.log(variable1);
        console.log(variable2);
    });
}).on('error', function(e){
      console.log("Error: ", e);
});
