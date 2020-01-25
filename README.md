# Employee-Summary

## User-Story
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles.

## Description
A software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers, interns, and managers. This application passes all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user via the command line.


## Installation
Use the package manager npm to install Employee-Summary.
```bash
npm install
```

## Technologies Used
NodeJS : 
    inquirer (for command line prompt and receiving user input), 
    jest (for running tests), 
    file serve (or fs, for writing and reading file with generated user input)