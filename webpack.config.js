const path = require('path');

module.exports = {
    mode: 'production',
    
    // define entry point
    entry: './src/script.js',

    // define output point
    output: {
        path: path.resolve('./dist'),
        filename: 'script.bundle.js'
    }
}