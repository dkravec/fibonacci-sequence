# The Fibonacci Sequence
Project created by Daniel Kravec, on June 20th 2021. 
- Last updated: June 21st 2021

<br />

# Table of contents
- [About](#about)
    - [Code Returns](#code-returns)
    - [Information](#information)
- [Usage](#usage)
- [Enable testing modes](#enable-testing-modes)
    - [Enable testing logs](#enable-testing-logs)
    - [Enable testing loops](#enable-testing-loops)
    - [Enable fibonacci logs](#enable-fibonacci-logs)

<br />

# About
The Fibonacci Sequence is found by adding up the last 2 numbers calucated.

Examples: 
- 1 + 1 = 2
- 1 + 2 = 3
- 2 + 3 = 5
- 3 + 5 = 8, etc.

<br />

## Code Returns
There are 3 types of data returned.

`./answer/results.json`
- Returns all the results in one single json file, plus returns previous 2 numbers to create the current result.

`./answer/justAnswers.json`
- Returns just the results in one single json file.

`./answer/all/(current) (result).json`
- Returns the results in seperate json files for each result, plus previous 2 numbers to create the current result. 
- Current is the amount of numbers the sequence currently has saved in order.

<br />

## Information
Gives you as many numbers of the sequence as possible. (Average of 1474 results per single run)

Enable different testing modes. Find more information: [Testing Modes](#enable-testing-modes)



<br />

# Usage

You must have node installed on your computer.

In terminal go to the path where the project folder is located.

Type in the command "`node .`" in the termnial, making sure it has the correct path.

The results will go in `./answer` once completed. 

<br />

# Enable testing modes

There are 3 built in testing modes
- Testing logs -> Adds console logs for current.
- Testing loops -> Loops code for batch testing.
    - Tested with 825 run with use of fibonacci function 1216875 times.
- Fibonacci logs -> Adds a console log for each time the fibonacci log is ran.
<br />

### Enable testing logs

Add console logs, showing what code is currently doing.

Current line 2: [testModes.json](./index.js)
- `"testingLogs" : false,`

Change to:
- `"testingLogs" : true,`

<br />

### Enable testing loops

Loop code to test command at large, repeating itself.

Current line 3: [testModes.json](./index.js)
- `"testingLoop" : false,`

Change to:
- `"testingLoop" : true,`

<br />

### Enable fibonacci logs

Console log all cacluations made by the fibonacci sequence.

Fibonacci logs looks like: 

`[current amount of runs by function] - [amount runs sequence] | [result] | [second last number] | [last number]`

Current line 4: [testModes.json](./index.js)
- `"fibonacciLogs" : false`

Change to:
- `"fibonacciLogs" : true`
