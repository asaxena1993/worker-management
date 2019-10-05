const request = require('request');
 
process.on('message', (message) => {
  console.log(`[child] received message from server: port ${message}, pid ${process.pid}`);
  setTimeout(() => {
    request(`http://localhost:${message}/rnd?n=150`, (err, data) => {
      if (data) {
        // console.log('------here-----', JSON.stringify(data.body));
        process.send(data.body);
      }
    });
    // process.disconnect();
  }, 100);
});