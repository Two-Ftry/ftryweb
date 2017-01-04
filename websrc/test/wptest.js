var os = require('os');
var interfaces = os.networkInterfaces();
var addresses = [];
for(var k in interfaces){
  for(var index in interfaces[k]){
    var address = interfaces[k][index];
    if(address.family == 'IPv4' && !address.internal){
      addresses.push(address.address);
    }
  }
}

console.log('addresses', addresses);
