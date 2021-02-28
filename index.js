
const fs = require('fs');

 const inquirer = require('inquirer');

 const jest = require('jest');



 var prompt = inquirer.createPromptModule();
 


prompt(questions).then("whats up willis");
// array of questions for user
/*inquirer
.prompt([
    What is this read me used for?
])
.then(answers => {
    console.log(answers);
/*
})
.catch(error => {
if(error.isTtyError) {
    // Prompt couldn't be rendered in current environment
} else {
   //something else went wrong
}
});
*/

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
