const inquirer = require("inquirer");

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

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("Success!");
  })
  .catch((error) => {
    if (error.isTtyError) "error";
  });
