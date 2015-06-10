var app = require('./server-config.js');

var port = env.process.port || 4568;
var IP = env.process.IP || 127.0.0.1;

app.listen(port,IP);

console.log('Server now listening on port ' + port);
