//key.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');// we are in production - return prod keys
} else {
  // we are in development - return dev keys
  module.exports = require('./dev');
}
