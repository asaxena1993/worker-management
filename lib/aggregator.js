'use strict';

module.exports = (collectedSamples, data) => {
  if (data.includes('rnd=')) {
    /* transform the data */
    let translatedData = data.toString();
    translatedData = translatedData.substring(0, translatedData.lastIndexOf('\n'));
    collectedSamples.push(translatedData);
    return collectedSamples;
  }
  throw new Error('Data streamed is of incorrect format');
};
