const path = require('path');

module.exports = {
  entry: 'CONTACT/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};