const path = require('path');
const fs = require('fs');

module.exports = {
    directory: path.join(__dirname, '../data', 'brands.json'),
    all: function () {
        return JSON.parse(fs.readFileSync(this.directory));
    }
}