const request = require('request');

const aggregator = require('./aggregator');

let n = 0,
    collectedSamples = [];;
const totalSamples = parseInt(process.argv[5]);

module.exports = (port) => {
    const streamer = request(`http://localhost:${port}/rnd?n=50`);
    streamer.on('data', (data) => {
        collectedSamples = aggregator(collectedSamples, data);
        console.log(`port: ${port} | index of data received: ${collectedSamples.length}`);
        n++;
        if(n === totalSamples) {
            console.log(`Sample collected: ${collectedSamples}\n`);
            console.log(`Number of samples: ${collectedSamples.length}\n`);
            console.timeEnd('Start');
            process.exit();
        }
    })
    return streamer;
}
