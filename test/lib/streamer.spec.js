const sinon = require('sinon');
const request = require('request');

const { stream } = require('../../lib/streamer');

let sandbox = sinon.sandbox.create();

describe('/lib/streamer.js tests -->', (done) => {
    
    afterEach(() => {
        sandbox.restore();
    });
    
    it('Success scenario where all worker starts', (done) => {
        sandbox.stub(request, 'get').returns({
            on: () => sinon.stub().withArgs('data').returns('rnd=32\nrnd=23\nrnd=10')
        });
        try {
            stream(3000);
            done();  
        } catch (e) {
            console.error('Test failed, error: ', e);
        }
    });

    // it('Failure scenario with graceful process exit where a worker was not able to spawn', (done) => {
    //     sandbox.stub(worker, 'start').resolves(new Error('worker failed'));
    //     try {
    //         appJS();
    //         done();  
    //     } catch (e) {
    //         console.error('Test failed, error: ', e);
    //     }
    // });
});