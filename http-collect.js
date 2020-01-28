'use-strict'

const   http    = require('http'),
        concat  = require('concat-stream'),
        url     = process.argv[2];
var     tot     = 0;

http.get(url,(res)=>{
    // const { statuscode }    = res;
    // const contentType       = res.headers['content-type'];
    res.setEncoding('utf8');
    // res.on('data', function (data) {
    //     //console.log(typeof data,data.length)/* ... */
    //     // data.forEach((item, i) => {
    //     //     tot += item.length;
    //     // });
    //
    // });

    res.pipe(concat((data)=>{
        console.log(data.length);
        console.log(data);
    }))

    res.on('end',()=>{
        
    });

});
