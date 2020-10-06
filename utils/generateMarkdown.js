function generateMarkdown(data) {
return ` # ${data.title}


    ## Table Of Contents
1. [Installation](#installation)
2. [Usage](usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)



https://img.shields.io/badge/License-MIT-Blue - automatic!

(#Title)

${data.title}

(#Description)

${data.description}

(#Table of Contents)

[Installation](#Installation)

${data.installation}

[Usage](#Usage)

${data.usage}

[License](#License)

${data.license}

[Contributing](#Contributing)

${data.contributing}

[Tests](#Tests)

${data.tests}

[Questions](#Questions)

${data.questions}

`
};

module.exports = generateMarkdown;