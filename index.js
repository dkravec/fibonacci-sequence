const fs = require("fs");

// SETTING TESTING MODES
const testingLogs = true;
const testingLoop = true;

// AMOUNT OF RUNS COUNTER FOR TESTING MODE
var amountRuns = 0
var amountFibonacci = 0

// ARRAYS FOR USE ELSEWHERE
var results = [];
var justAnswers = [];

const dataStart = {
    "first" : 1,
    "second" : 1,
    "firstRun" : true
};

// READYS DIRECTORIES
readyFolder();

function fibonacci(pastResult) {
    if (testingLogs) amountFibonacci = amountFibonacci + 1;

    // CHECKS IF IT IS THE FIRST TIME FUNNING THE FIBONACCI FUNCTION
    if (pastResult.firstRun) {
        const dataSend = {
            "oldFirst" : 1,
            "first" : 1,
            "second" : 1,
        };
        results.push(dataSend);
    };

    // SET UP FOR LAST 2 NUMBERS FOR ADDING
    const first = pastResult.first;
    const second = pastResult.second;

    // ADDS LAST 2 NUMBERS
    const result = first + second;

    // SETS NEW DATA 
    const newFirst = second;
    const newSecond = result;

    // TURNS INFORMATION INTO OBJECT TO USE ELSEWHERE
    const data = {
        "oldFirst" : first,
        "first" : newFirst,
        "second" : newSecond,
    };

    /*
        IF THE SEQUENCE ENDS UP WITH INFINITY (CAN'T GO FUTHER)
        WILL RETURN FUNCTION TO CHECK DIR, AND SENDS IN NEXT FUNCTION TO RUN
    */
    if (data.second == Infinity) return checkingAnswerAllDir('./answer/all', writeResults());

    // PUSHES DATA TO ARRAYS
    results.push(data);
    justAnswers.push(data.second);

    // RE-RUNS FIBONACCI FUNCTION, TO FIND NEXT NUMBER
    fibonacci(data);
}

// WRITES ALL RESULTS FOUND AT THE END OF FIBONACCI SEQUENCE
function writeResults() {
    if (testingLogs) console.log("Writing Results.");
    var currentResult = 0;
    
    // SAVES EACH RESULT IN EXTRA FILE
    for (result of results) {
        currentResult = currentResult + 1;
        let saveResult = JSON.stringify(results);
        fs.writeFile(`./answer/all/${currentResult} ${result.second}.json`, saveResult, (err) => {
            if (err) throw err;
        });
    };

    // SAVES JSON FILE WITH JUST THE SEQUENCE
    let saveJustAnswers = JSON.stringify(justAnswers);
    fs.writeFile(`./answer/justAnswers.json`, saveJustAnswers, (err) => {
        if (err) throw err;
    });

    // SAVES JSON FILE WITH THE SEQUENCE, PLUS EXTRA INFO
    let saveResults = JSON.stringify(results);
    fs.writeFile(`./answer/results.json`, saveResults, (err) => {
        if (err) throw err
        else {
            if (testingLogs) {
                const timesAmountRuns = checkTimesAmonut(amountRuns);
                const timesRunsRibonacci = checkTimesAmonut(amountFibonacci);
                console.log("Saved results.");
                console.log(`Code ran total of ${amountRuns} ${timesAmountRuns}`)
                console.log(`Ran fibonacci function a total of ${amountFibonacci} ${timesRunsRibonacci}`)
                console.log("---- Done Fibonacci Sequence ----");
            };
            if (testingLoop) {    
                // RESETS ARRAYS (makes a lot faster)
                results = [];
                justAnswers = [];  

                // RE-RUNS FIRST FUNCTION
                readyFolder();
            };  
        };
    });
}

// CHECK IF TIME REQUIRES AN "S" AFTER WORD
function checkTimesAmonut(number) {
    var times;
    if (number > 1) times = "times";
    else times = "time";
    return times;
}

// SETS UP ALL THE REQUIRED FOLDERS
function readyFolder() {
    if (testingLogs) {
        console.log("--- Starting Fibonacci Squence ----");

        // ADDS TO THE AMOUNT OF RUNS
        amountRuns = amountRuns + 1;
    };
    
    // REMOVES ALL THE OLD ANSWERS IF THERE ARE ANY
    const ansDir = checkDirectory('./answer');
    if (ansDir) {
        try {
            fs.rmdirSync(`./answer`, { recursive: true });
        } catch (err) {
            console.error(`Error while deleting ${cacheDir}.`);
        };
        if (testingLogs) console.log("Deleted previous answer folder.");
    }
    else {
        if (testingLogs) console.log("No answer previous folder found.");
    }
    
    // MAKE DIRECTORIES
    // MAKES MAIN ANSWER FOLDER
    fs.mkdir(`./answer`, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            if (testingLogs) console.log("Made './answer' directory");

            // MAKES DIRECTORY FOR ALL ANSWERS
            fs.mkdir(`./answer/all`, function(err) {
                if (err) console.log(err);
                else {
                    if (testingLogs) console.log("Made './answer/all' directory.");

                    // RUNS MAIN FIBONACCI FUNCTION 
                    fibonacci(dataStart);
                };
            });
        };
    });
};

/*
    CHECKS IF THERE IS A DIRECTORY 
    WAITS UNTIL THERE IS ONE FOUND
    RUNS FUNCTION REQUESTED BY CALL
*/
async function checkingAnswerAllDir(path, functionToRun) {
    const checkAnsDir = checkDirectory(path);
    if (checkAnsDir != true) setTimeout(() => {  checkingAnswerAllDir(path) }, 100);
    else functionToRun;
};

// CHECK IF THERE IS A DIRECTORY
function checkDirectory(path) {
    try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (err) {
        return false;
    };
};