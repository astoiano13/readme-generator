var inquirer = require("inquirer");
var fs = require("fs");

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

    {type: "input",

    },

    {type: "input",

    },

    {type: "input",

    },

  ]).then(answers => {
      console.log(answers);
      
      let readme = "";
      
      fs.writeFile("README.md", readme, err =>{
          if (err) {
              return console.log(err);
            }
        });
    });