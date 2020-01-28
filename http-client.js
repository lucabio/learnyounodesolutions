'use strict'

const   http    = require('http'),
        url     = process.argv[2];


http.get(url,(res)=>{
    // const { statuscode }    = res;
    // const contentType       = res.headers['content-type'];
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data.toString())/* ... */
    });
});
