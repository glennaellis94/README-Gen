// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//const generatePage = require("./src/page-template");

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
	return inquirer.prompt([
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
			message: "Provide an usage information for the project (Required)",
			validate: useInfoInput => {
				if (useInfoInput) {
					return true;
				} else {
					console.log("You need to enter usage information!");
					return false;
				}
			},
		},

		{
			type: "confirm",
			name: "confirmAbout",
			message: 'Would you like to enter some information about yourself for an "About" section?',
			default: true,
		},
		{
			type: "input",
			name: "about",
			message: "Provide some information about yourself:",
			when: ({ confirmAbout }) => confirmAbout,
		},
	]);
};
promptUser();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
