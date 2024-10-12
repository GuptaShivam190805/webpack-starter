const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',  // Ensure this path is correct and matches your project structure
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'  // Corrected 'budle.js' to 'bundle.js'
    }
};
