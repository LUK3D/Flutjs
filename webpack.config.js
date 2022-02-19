const path = require('path');

module.exports = {
  entry: './dist/index.js',
  output: {
    filename: 'flutjs.min.js',
    path: path.resolve(__dirname, 'dist'),
    
  },
};