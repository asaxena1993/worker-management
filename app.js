const worker = require('./lib/worker');
const { numberOfWorkers, numberOfSamples } = require('./config.json');

console.log(`Workers count: ${numberOfWorkers}\nSample data required: ${numberOfSamples}\n`);

console.time('Start');
try {
  Array(numberOfWorkers).fill().map((_, port)=> worker.start(3000 + port));
} catch (error) {
  console.error('Error occured while spwaning the workers\n', error);
  process.exit(1);
}