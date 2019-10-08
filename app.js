'use strict';

const worker = require('./lib/worker');
const { numberOfWorkers, numberOfSamples } = require('./config.json');

console.log(`Workers count: ${numberOfWorkers}\nSample data required: ${numberOfSamples}\n`);

console.time('Start');
try {
  /* Iteratively intialize the child processes(workers) */
  Array(numberOfWorkers).fill().map((_, port)=> worker(3000 + port));
} catch (error) {
  console.error('Error occured while spwaning the workers\n', error);
  /* Gracefully exit the process if spawning fails */
  process.exit(1);
}
