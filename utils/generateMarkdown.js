// function to generate markdown for README
function generateMarkdown(data) {
  return `![shield](https://img.shields.io/badge/license-MIT-blue)

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
  ${data.github}
  ${data.email}

  ## License
  ${data.license}
  `;
}

module.exports = generateMarkdown;
