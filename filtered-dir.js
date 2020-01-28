const fs = require('fs');
const path = require('path');

function filterDir(dirpath, filterext, callback) {
    const filter = `.${filterext}`;
    fs.readdir(dirpath, (err, list) => {
        const filteredFiles = [];
        if (err) {
            return callback(err, null);
        }
        list.forEach((item) => {
            const ext = path.extname(item);
            if (ext === filter) {
                filteredFiles.push(item);
            }
        });
        return callback(null, filteredFiles);
    });
}

module.exports = filterDir;
