
const { spawn } = require('child_process');
const run = spawn('./bin/pocketbase', ['serve', '--http', `127.0.0.1:${process.env.PORT || 8090}`]);

run.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

run.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

run.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});