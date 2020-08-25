var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      choices: ["English", "Spanish", "Mandarin", "Spanish", "German", "Russian"],
      name: "languages"
    },
    {
      type: "list",
      message: "What is your preferred method of communication:",
      choices: ["Mobile phone", "Home phone", "Email"],
      name: "communication"
    }
  ]).then(answers => {
      console.log(answers);
      
      let readme = "";
      
      fs.writeFile("README.md", readme, err =>{
          if (err) {
              return console.log(err);
            }
        });
    });