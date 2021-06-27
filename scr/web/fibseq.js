// ARRAY FOR ALL RESULTS
var justAnswers = [];

// INITIAL DATA
const dataStart = {
    "first" : 1,
    "second" : 1,
    "firstRun" : 1
};

function allResults() {
    justAnswers = []
    fibonacci(dataStart)
    return justAnswers
}

function indexArray(number) {
    justAnswers = []
    fibonacci(dataStart)
    return justAnswers[number]
}


function fibonacci(pastResult) {
    // CHECKS IF IT IS THE FIRST TIME FUNNING THE FIBONACCI FUNCTION
    if (pastResult.firstRun) {
        justAnswers = []

        var dataSend
        if (pastResult.firstRun == 1) {
            dataSend = {
                "oldFirst" : 1,
                "first" : 1,
                "second" : 1,
                "firstRun" : 2,
            };
        }
        else {
            dataSend = {
                "oldFirst" : 1,
                "first" : 1,
                "second" : 1,
            };
        }
        
        justAnswers.push(dataSend.second);
        return fibonacci(dataSend)
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

    if (data.second == Infinity) return 

    // PUSHES DATA TO ARRAYS
    justAnswers.push(result);

    // RE-RUNS FIBONACCI FUNCTION, TO FIND NEXT NUMBER
    fibonacci(data);
}