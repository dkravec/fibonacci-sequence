# The Fibonacci Sequence
Project created by Daniel Kravec, on June 20th 2021. 
- Last updated: June 21st 2021

<br />

# Table of contents
- [About](#about)
    - [Code Returns](#code-returns)
    - [Information](#information)
    - [Versions](#versions)
- [Usage](#usage)
    - [Run Code](#run-code)
    - [Enable testing modes](#enable-testing-modes)
        - [Enable testing logs](#enable-testing-logs)
        - [Enable testing loops](#enable-testing-loops)

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
- Gives you as many numbers of the sequence as possible. (Around 1475 results)
- Enable testing mode as wanted.
    - Console logs current events.

<br />

## Versions
Complete version history of the `Fibonacci Sequence` project.
### 1.0 (1.2021.06.21)
- June 20-21, 2021.
- Cacluates the fibonacci sequence.
- Creates 3 sets of files:
    - results.json
    - justAnswers.json
    - (current) (result).json
- Created README file.
- Added comments to code.

<br />

# Usage
## Run Code
Use "`node .`" in termnial with current path as the main folder to run the program.

<br />

## Enable testing modes
There are 2 built in testing modes
- Testing logs -> Adds console logs for current.
- Testing loops -> Loops code for batch testing.
    - Tested with 825 run with use of fibonacci function 1216875 times.

<br />

### Enable testing logs
Add console logs, showing what code is currently doing.

Current line 4: [index.js](./index.js)
- `const testingLogs = false;`

Change to:
- `const testingLogs = true;`

<br />

### Enable testing loops.

Loop code to test command at large, repeating itself.

Current line 5: [index.js](./index.js)
- `const testingLoop = false;`

Change to:
- `const testingLoop = true;`