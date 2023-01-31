// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { builtinModules } = require('module');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'provide a project description',
        name: 'description'
    },
    {
        type: 'list',
        message: 'which licesnse would you like to use?',
        name: 'license',
        choices: [
            { name: 'Apache 2.0' },
            { name: 'Boost 1.0' },
            { name: 'BSD 3-Clause' },
            { name: 'CC0-1.0' },
            { name: 'Eclipse Public License 1.0' },
            { name: 'MIT' },
            { name: 'MPL-2.0' },
            { name: 'Perl' },
            { name: 'None', value: null }
        ]
    },
    {
        type: 'installation',
        message: 'describe how users are going to install this app',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'describe the usage of this app',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'provide description of tests for project',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'what is your github username?',
        name: 'githubUN',
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
    },
]

// TODO: Create a function to write README file
function writeToFile(questions) {
    fs.writeFile('./README.md', generateMarkdown.generateMarkdown(questions), { flag: 'wx' }, (err) =>
        err ? console.error(err) : console.log('written to file'));

// TODO: Create a function to initialize app
function generateReadme() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response)
        );
}

// Function call to initialize app
generateReadme();

// exports the function for possible useage
module.exports = generateReadme;