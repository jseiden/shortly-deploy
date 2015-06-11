var app = require('./server-config.js');

var port = env.process.port || 4568;
// var IP = env.process.IP || 'https://jakeliamshortly.azurewebsites.net/';

app.listen(port);

console.log('Server now listening on port ' + port);
