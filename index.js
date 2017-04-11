const exec = require('child_process').exec;
const path = require('path');

function gitPull (path) {
    var cmd = 'git pull origin master:master';
    return new Promise((resolve, reject) => {
        exec(cmd, {
            cwd: path
        }, (error, stdout, stderr) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(stdout || stderr);
            }
        })
    });
}

var pt = process.argv[process.argv.length - 1];

gitPull(path.resolve(process.cwd(), pt)).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err.message)
})