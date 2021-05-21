// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(response) {
	return `
  
  # ${response.title}
  
  ## Table of contents
  * [Discription](#description)
  * [Installation instructions](#instructions)
  * [useInfo](#useInfo)
  * [License](#licenseChoice)
  * [Contibuters](#contributer)
  * [Tested](#test)
  * [Email](#userEmail)
  * [GitHub](#github)
  * [Reason](#question3)
  * [Coding Difficulty](#question5)
  ## Disctiption
  ${response.description}
  ## Installation
  ${response.instructions}
  ## useInfo
  ${response.useInfo}
  ## License
  ${response.licenseChoice}
  ## Contributers
  ${response.contributer}
  
  
  ## Questions
  If you want to contact me
  ## Email
  ${response.userEmail}
  
  ## Github
  ${response.github}
`;
}

module.exports = generateMarkdown;
