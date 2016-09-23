// // /**
// //  * Created by MS.ASGARI on 9/23/2016.
// //  */

// var http = require('http');
// var fs = require('fs');
// var util = require('util');


var http = require('http');
var  url = require('url');
var fs = require('fs');
//var formidable = require("formidable");
var util = require('util');



 function displayForm(res) {

    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end(data);
    });
}
function getData(req,res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
//        'Content-Length': data.length

    });

    res.write('FirstName:'+ req.query.firstname +"<br><br>" +
            'LastName:' + req.query.lastname + "<br><br>" +
            'ID :' + req.query.ID.toString() + "<br><br>"+
            'Grade:' + req.query.grade + "<br><br>");
    res.end()
}

var server = http.createServer(function (req, res) {
    var url_p =url.parse(req.url,true);
    if(url_p.pathname == '/')
        displayForm(res);
    if (url_p.pathname == '/myaction')
        getData(url_p,res);

});
 server.listen(1717);
console.log("server is listening on 1717");