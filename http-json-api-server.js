const http = require('http');

const url = require('url');

const port = process.argv[2];

function parseTime(timeString) {
    const date = new Date(timeString);
    const result = {};

    result.hour = date.getHours();
    result.minute = date.getMinutes();
    result.second = date.getSeconds();

    return result;
}

function unixTime(timeString) {
    // console.log(`unixTime ${timeString}`);
    const date = Date.parse(timeString);
    const result = {};

    result.unixtime = date;

    return result;
}

http.createServer((req, res) => {
    // get URL
    const urldet = url.parse(req.url, true);
    const path = urldet.pathname;
    const strtime = urldet.query.iso;
    let result = {};
    // console.log(`URL Detail -> ${urldet.query.iso}`);
    switch (req.method) {
    case 'GET':
        if (path === '/api/parsetime') {
            result = parseTime(strtime);
        } else if (path === '/api/unixtime') {
            result = unixTime(strtime);
        }
        break;
    default:
    }

    if (result) {
        res.statusCode = 200;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.statusCode = 400;
        res.end();
    }
}).listen(port);
