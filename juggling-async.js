'use strict'

const   http    = require('http'),
        concat  = require('concat-stream'),
        result  = [];

let     count   = 0;

function printResult(){
    result.forEach((item, i) => {
        console.log(item);
    });
}


function httpGet(index){
    http.get(process.argv[2 + index],(res)=>{
        //console.log(res);
        res.setEncoding('utf8');
        res.pipe(concat((data)=>{
            result[index] = data;
            count++;
        }));

        res.on('end',()=>{
            if(count === 3){
                printResult();
            }
        });
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i);
}
