var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {type:"input",
    message: "What is your user name?",
    name: "username"
    },

    {
     
    },
    
    {
      
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