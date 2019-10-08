'use strict';

const rewire = require('rewire');
const nock = require('nock');

const streamer = rewire('../../lib/streamer');

describe('/lib/streamer.js tests -->', () => {
  before(() => {
    streamer.__set__({
      numberOfSamples: 2,
      process: {
        exit: () => true,
      },
      console: {
        timeEnd: () => true,
        log: () => true,
        error: () => true,
      },
    });
  });

  it('Success scenario where all worker starts', (done) => {
    const response = 'rnd=32\nrnd=23\nrnd=10';
    nock('http://localhost:3000')
      .get('/rnd?n=50')
      .reply(200, response);
    try {
      streamer(3000);
      done();
    } catch (e) {
      console.error('Test failed, error: ', e);
    }
  });

  it('Success scenario where total sample data is gathered', (done) => {
    const response = 'rnd=32\nrnd=23\nrnd=10\nrnd=20\nrnd=15';
    nock('http://localhost:3000')
      .get('/rnd?n=50')
      .reply(200, response);
    try {
      streamer(3000);
      done();
    } catch (e) {
      console.error('Test failed, error: ', e);
    }
  });

  it('Failure scenario where stream throws error', (done) => {
    nock('http://localhost:3000')
      .get('/rnd?n=50')
      .replyWithError({
        message: 'Error while streaming data from port',
        code: 500,
      });
    try {
      streamer(3000);
      done();
    } catch (e) {
      console.error('Test failed, error: ', e);
    }
  });
});
