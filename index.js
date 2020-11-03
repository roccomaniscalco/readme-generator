const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    name: "title",
    message: "Title: ",
  },
  {
    name: "description",
    message: "Description: ",
  },
  {
    name: "usage",
    message: "Usage Information: "
  },
  {
    name: "installation",
    message: "Installation Instructions: ",
  },
  {
    name: "Contribution",
    messgae: "Contribution Guidelines: ",
  },
  {
    name: "testing",
    message: "Test Instructions: ",
  },
  {
    type: "list",
    name: "License",
    choices: ["MIT","BSD-2-Clause","CDDL-1.0"],
  },
];

// function to initialize program
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile("README.md",answers);
  })
  .catch((error) => {
    if (error.isTtyError) "error";
  });
}

// function to write README file
function writeToFile(fileName, data) {
  console.log(data);
}

// function call to initialize program
init();