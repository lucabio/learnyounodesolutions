const fs = require('fs');

const file = process.argv[2];


fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.log(`Error ${err}`);
    } else {
        const lines = data.split('\n').length - 1;
        console.log(`${lines}`);
    }
});
