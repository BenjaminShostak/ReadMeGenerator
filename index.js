
// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// QUESTIONS //////////////
const questions = [
  
  {
    type: 'input',
    name: 'email',
    message: 'What is your business email address??',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is the project's name??",
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Name??',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
];

//writes README file using user inputs
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();
