const { spawn } = require('child_process');

const streamData = require('./stream');

const start = (id) => {
  const worker = spawn('./bin/worker.mac', ['-workerId', id, '-port', id]);
  worker.id = id;
  streamData(id);
  // worker.on('close', (code) => {
  //     console.log(`Respawning -- child process exited with code ${code}, ${worker.id}`);
  //     startWorker(worker.id);
  // });
}

module.exports = { start };
