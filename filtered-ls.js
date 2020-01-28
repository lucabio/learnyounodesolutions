const fs = require('fs');

const path = require('path');

const pathName = process.argv[2];
const filterExt = `.${process.argv[3]}`;

fs.readdir(pathName, (err, list) => {
    if (err) {
        console.log(`error ${err}`);
    }

    list.forEach((item) => {
        const ext = path.extname(item);
        if (ext === filterExt) {
            console.log(item);
        }
    });
});
