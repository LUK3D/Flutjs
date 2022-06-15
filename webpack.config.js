const path = require('path');

module.exports = {
  entry: './dist/index.js',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'dist'),
    
  },
};