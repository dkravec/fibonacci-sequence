1.0 (1.2021.06.21)
===================

June 20-21, 2021

- Cacluates the fibonacci sequence.
- Creates 3 sets of files:
    - results.json
    - justAnswers.json
    - (current) (result).json
- Created README file.
- Added comments to code.


1.0.1 (2.2021.06.21)
===================

June 21st, 2021

- Updated README file to cleaner and more information.
- Changed default testing mode.
- Added ignore to `./answer`
- Added new testing mode: [Fibonacci logs](#enable-fibonacci-logs)


1.1 (3.2021.06.21)
===================

June 21st, 2021

- Fixed up README file
- Adds an extra 1 at start of results.json, and adds both 1s at start of justAnswers.json
- Created a markup for the future usage of commands. [usage.txt](./usage.txt)
- Started to separate functions into different files.
- Created a file for the function that read any file requested.
    - Added logging
- Created a file for the function that checks a directory.
    - Added logging
- Added the current total runs in Fibonacci logs.


1.1.1 (4.2021.06.22)
===================

June 22nd, 2021

- Fixed /all results.
    - before it would save all results in each file in /all. 
    - Now saves just single result according to the correct result.
- Created a HISTORY file for the versions.


1.1.2 (4.2021.06.23)
===================

June 23rd, 2021

- Has a time reader, console logs time it cool.


Future Updates
===================

- Organizing functions into different files.
- Creating different functions to run. (as a package)
    - Wont save the result, it will just return the requested data
    - See more information on functions (so far) in [Usage File](./usage.txt)
- A web package you can use for websites