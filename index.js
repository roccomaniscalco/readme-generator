const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

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
    message: "Usage Information: ",
  },
  {
    name: "installation",
    message: "Installation Instructions: ",
  },
  {
    name: "contribution",
    message: "Contribution Guidelines: ",
  },
  {
    name: "tests",
    message: "Test Instructions: ",
  },
  {
    name: "github",
    message: "Github Username: ",
  },
  {
    name: "email",
    message: "Email: ",
  },
  {
    type: "list",
    name: "license",
    message: "License: ",
    choices: ["Appache 2.0", "BSD 2-Clause", "MIT", "MPL 2.0"],
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
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log('Saved!');
  })
}

// function call to initialize program
init();