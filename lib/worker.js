const { spawn } = require('child_process');

const { stream } = require('./streamer');

const start = (id) => {
  const worker = spawn('./bin/worker.mac', ['-workerId', id, '-port', id]);
  worker.id = id;
  stream(id);
}

module.exports = { start };
