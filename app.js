const worker = require('./lib/worker');

const numberOfWorkers = parseInt(process.argv[3]);
console.log(`Workers count: ${numberOfWorkers}\nSample data required: ${process.argv[5]}\n`);

console.time('Start');
Array(numberOfWorkers).fill().map((_, port)=> worker.start(3000 + port));