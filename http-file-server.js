const http = require('http');

const fs = require('fs');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const content = fs.createReadStream(process.argv[3]);

    const text = content.pipe(res)
        .toString();

    console.log(`${text}`);
});

server.listen(port);
