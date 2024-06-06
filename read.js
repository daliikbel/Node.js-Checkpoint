var fs = require('fs');
fs.readFile('hello.txt', 'utf8', function (err, data) {
    err? console.log (err):
    console.log(data);});

