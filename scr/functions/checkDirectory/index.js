const fs = require('fs')

// CHECK IF THERE IS A DIRECTORY
module.exports = (path, testModes) => {
    try {
        var stat = fs.lstatSync(path);
        if (testModes.testingLogs) console.log(`Found : '${path}' -- ${stat.isDirectory()}`)
        return stat.isDirectory();
    } catch (err) {
        if (testModes) console.log(err)
        if (testModes.testingLogs) console.log(`Found : '${path}' -- False`)
        return false;
    };
}