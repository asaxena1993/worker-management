const child_process = require('child_process');

const aggregator = require('./aggregator');

const numchild  = require('os').cpus().length;

let done = 0;
let port = 3000;
let sampleData = [];

const startTime = new Date().getTime();

for (let i = 0; i < numchild; i++) {
  child_process.spawn('./bin/worker.mac', ['-workerId', process.pid, '-port', ++port]);
  var forker = child_process.fork('./child.js');
  forker.send(port);
  forker.on('message', function(message) {
    console.log('[parent] received message from child:', message);
    sampleData = aggregator(sampleData, message);
    done++;
    if (done === numchild) {
      console.log('[parent] received all results');
      console.log('Aggregated sample data: ', sampleData);
      console.log('Aggregated sample data count: ', sampleData.length);
      const endTime = new Date().getTime();
      console.log("Duration [secs] : " + (endTime-startTime)/1000);
      process.exit();
    }
  });
}