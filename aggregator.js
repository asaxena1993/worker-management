module.exports = (sampleData, message) => {
    let data = [];
    if (message.lastIndexOf("\n") > 0) {
      data = message.substring(0, message.lastIndexOf("\n"));
    }
    data = data.replace(/[\n\r]+/g, ' ').split(' ');
    return [...sampleData, ...data];
}; 