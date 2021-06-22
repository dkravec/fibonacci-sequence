
module.exports = (fileToRead, testModes) => {
    var path;
    
    // CHECKS WHICH PATH IS ASKED FOR
    if (!fileToRead) path = '../../../answer/justAnswers.json';
    else if (fileToRead == "justAnswers") path = '../../../answer/justAnswers.json';
    else if (fileToRead == "results") path = '../../../answer/results.json';
    
    // GETS DATA FROM REQUESTED PATH
    const data = require(path);
    if (testModes.testingLogs) console.log(`Read fie: ${path}`)
    return data;
}
