var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("generateMarkdown");
var path = require("path")


inquirer
  .prompt([
    {type:"input",
    message: "What is your username?",
    name: "username"
    },

    {type: "input",
    message: "What is the title of your project?",
    name: "title"
     
    },

    {type: "input",
    message: "What is a description of your project?",
    name: "description"
      
    },

    {type: "confirm",
    message: "Would you like to create an auto-generated Table of Contents?",
    name: "Table of Contents"

    },

    {type: "checkbox",
    message: "What do you want your project license to be?",
    name: "license",
    choices: ["APACHE 2.0", "BSD 3", "MIT", "GPL 3.0", "None"]

    },

    {type: "input",
    message: "Input your instructions for installation",
    name: "npm i"

    },

  ]).then(answers => {
      console.log(answers);
      
      let readme = "";
      
      fs.writeFile("README.md", generateMarkdown(answers), err =>{
          if (err) {
              return console.log(err);
            }
        });
    });