module.exports = (collectedSamples, data) => {
  let translatedData = data.toString();
  translatedData = translatedData.substring(0, translatedData.lastIndexOf('\n'));
  collectedSamples.push(translatedData);
  return collectedSamples;
}; 