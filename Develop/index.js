// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
//const generatePage = require("./src/page-template");

// TODO: Create an array of questions for user input
const questions = [
	// const promptUser = () => {
	// 	return inquirer.prompt([
	//provide your name
	{
		type: "input",
		name: "name",
		message: "What is your name? (Required)",
		validate: nameInput => {
			if (nameInput) {
				return true;
			} else {
				console.log("Please enter your name!");
				return false;
			}
		},
	},
	//provide your email
	{
		type: "input",
		name: "userEmail",
		message: "Please provide your email? (Required)",
		validate: userEmailInput => {
			if (userEmailInput) {
				return true;
			} else {
				console.log("Please enter your Email!");
				return false;
			}
		},
	},
	//provide your GitHub Username
	{
		type: "input",
		name: "github",
		message: "Enter your GitHub Username (Required)",
		validate: githubInput => {
			if (githubInput) {
				return true;
			} else {
				console.log("Please enter your GitHub username!");
				return false;
			}
		},
	},

	//provide project title
	{
		type: "input",
		name: "projName",
		message: "What is the name of your project? (Required)",
		validate: projNameInput => {
			if (projNameInput) {
				return true;
			} else {
				console.log("Please enter your project name!");
				return false;
			}
		},
	},
	//provide github repository
	{
		type: "input",
		name: "githubRepo",
		message: "Enter your GitHub repository for this project. (Required)",
		validate: githubRepoInput => {
			if (githubRepoInput) {
				return true;
			} else {
				console.log("Please enter your GitHub username!");
				return false;
			}
		},
	},
	//provide description
	{
		type: "input",
		name: "description",
		message: "Provide a description of the project (Required)",
		validate: descriptionInput => {
			if (descriptionInput) {
				return true;
			} else {
				console.log("You need to enter a project description!");
				return false;
			}
		},
	},

	//provide installation instructions
	{
		type: "input",
		name: "instructions",
		message: "Provide an installation instructions for the project (Required)",
		validate: instructionsInput => {
			if (instructionsInput) {
				return true;
			} else {
				console.log("You need to enter an installation instructions!");
				return false;
			}
		},
	},

	//provide usage information
	{
		type: "input",
		name: "useInfo",
		message: "Provide usage information for the project (Required)",
		validate: useInfoInput => {
			if (useInfoInput) {
				return true;
			} else {
				console.log("You need to enter usage information!");
				return false;
			}
		},
	},

	//provide license's used
	{
		type: "list",
		name: "licenseChoice",
		message: "Which license did you use on this",
		choices: ["MIT", "GPL-2.0", "Apache-2.0", "GPL-3.0", "BSD-2-Clause", "ISC"],
		when: ({ license }) => license,
		validate: licenseChoice => {
			if (licenseChoice) {
				return true;
			} else {
				console.log("You have to chose a license.");
				return false;
			}
		},
	},
	//provide contributors
	{
		type: "confirm",
		name: "confirmContribute",
		message: "Has anyone else contributed on this project",
		default: true,
	},
	{
		type: "input",
		name: "Contributer",
		message: "Provide some information about yourself:",
		when: ({ confirmContribute }) => confirmContribute,
	},
];

// promptUser();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, err => {
		if (err) throw new Error(err);

		console.log("README.md file generated with success!");
	});
}

function init() {
	inquirer.prompt(questions).then(answers => {
		const response = generateMarkdown(answers);
		console.log(answers);

		writeToFile("README.md", response);
	});
}
// Function call to initialize app
init();
