// function to generate markdown for README
function generateMarkdown(data) {

  return `!(shield)[https://img.shields.io/badge/license-${percentify(doubleDashify(data.license))}-blue](https://opensource.org/licenses/${dashify(data.license)})

  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Usage
  ${data.usage}
  
  ## Installation
  ${data.installation}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  View my Github profile at (${data.github})[https://github.com/${doubleDashify(data.github)}]. Please direct your inquiries to **${data.email}**.

  ## License
  Licensed under the (${data.license})[https://opensource.org/licenses/${dashify(data.license)}] license.
  `;
}

// turns spaces into hyphens
function dashify(str){
  const arr = str.split(" ");
  return arr.join("-");
}

// turns hyphens into two hyphens
function doubleDashify(str){
  const arr = str.split("-");
  return arr.join("--");
}

//turns spaces into '%20's
function percentify(str){
  const arr = str.split(" ")
  return arr.join("%20")
}

module.exports = generateMarkdown;