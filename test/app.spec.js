const sinon = require('sinon');

const appJS = require('../app');
const worker = require('../lib/worker'); 

process.argv = ['/dummy/path', 'workers', '18', 'data', '150'];

let sandbox = sinon.sandbox.create();

sandbox.stub(worker, 'start').resolves(true);

appJS();

sandbox.restore();

// const rewire = require('rewire');

// const appJS = require('../app');

// const myModule = rewire('../app');

// myModule.__set__('process', {
//         argv: ['/dummy/path', 'workers', '18', '18', 'data', '150']
//     }
// );

// appJS();