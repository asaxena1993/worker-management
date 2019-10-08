'use strict';

const request = require('request');

const aggregator = require('./aggregator');
const { numberOfSamples } = require('../config.json');

let n = 0;
let collectedSamples = [];

module.exports = (port) => {
  const streamer = request.get(`http://localhost:${port}/rnd?n=50`);
  /* Listening to the port number for data */
  streamer.on('data', (data) => {
    collectedSamples = aggregator(collectedSamples, data);
    console.log(`port: ${port} | index of data received: ${collectedSamples.length}`);
    n++;
    /* If number of samples collected is equal to required number, exit the process */
    if (n === numberOfSamples) {
      console.log(`Sample collected: ${collectedSamples}\n`);
      console.log(`Number of samples: ${collectedSamples.length}\n`);
      console.timeEnd('Start');
      process.exit(1);
    }
  });

  /* Listening to error occurred while retrieving the data */
  streamer.on('error', () => {
    console.error('Error while streaming data from port: ', port);
  });
};
