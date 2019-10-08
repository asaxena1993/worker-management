'use strict';

const { spawn } = require('child_process');

const streamer = require('./streamer');

module.exports = (id) => {
  try {
    /* Spawning the binary with configured port number */
    spawn('./bin/worker.mac', ['-workerId', id, '-port', id]);
  } catch (error) {
    console.error('Error while spawning worker ', error);
    throw error;
  }
  /* Start listening at port numbers to retrieve random numbers */
  streamer(id);
};
