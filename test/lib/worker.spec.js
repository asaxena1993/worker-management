'use strict';

const rewire = require('rewire');

const worker = rewire('../../lib/worker');

describe('/lib/worker.js tests -->', () => {
  before(() => {
    worker.__set__({
      spawn: () => () => {
        id: 3000;
      },
      streamer: () => true,
      console: {
        error: () => true,
      },
    });
  });

  it('Success scenario where worker is spawned and streaming starts', (done) => {
    try {
      worker(3000);
      done();
    } catch (e) {
      console.error('Test failed, error: ', e);
    }
  });

  it('Failure scenario where spawning worker fails', (done) => {
    worker.__set__({
      spawn: new Error('spawn ./bin/worker ENOENT'),
    });
    try {
      worker(3000);
    } catch (e) {
      done();
    }
  });
});
