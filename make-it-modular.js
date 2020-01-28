const filterDir = require('./filtered-dir.js');

const pathName = process.argv[2];
const filterExt = process.argv[3];

filterDir(pathName, filterExt, (err, list) => {
    if (err) {
        console.log(err);
    }

    list.forEach((item) => {
        console.log(item);
    });
});
