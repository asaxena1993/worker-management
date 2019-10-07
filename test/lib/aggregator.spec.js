const aggregator = require('../../lib/aggregator'); 

describe('lib/aggregator.js tests -->', (done) => {
    
    it('Success scenario where received data is pushed in orginal array', (done) => {
        const data = 'rnd=32\nrnd=23\nrnd=10';
        try {
            aggregator([], data);
            done();  
        } catch (e) {
            console.error('Test failed, error: ', e);
        }
    });

    it('Failure scenario where received data is invalid', (done) => {
        const data = 'r=32\nr=23';
        try {
            aggregator([], data);
        } catch (e) {
            done();  
        }
    });
});