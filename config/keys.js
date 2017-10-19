//keys.js figured out what set of credentials return

if(process.env.NODE_ENV === 'production'){
  //we're production - return the prod set of keys
  module.exports = require('./prod');
}
else {
  //we're dev - return dev keys!!
  module.exports =  require('./dev');
}