const Fs = require('fs');
const inquirer = require("inquirer");

const readmeGenerator = (info) => 
`# ${info.title}

##Table of contents

[Description](#Description)

[Installation](#Installation)

[Usage Guidelines](#Usage)

[Contribution Guidelines](#Contribution)

[Testing Instructions](#Testing)

[Github](#Github)

[Contact me](#Contact)


## Description 
${info.description}


##Installation
${info.installation}

##Usage

${info.usage}

## Contribution
${info.contribution}

##Testing 
${info.test}

##Github
You can find more on my Github at https://github.com/${info.github}

##Contact
If you have any further questions feel free to reach out and ask by sending an email to ${info.email}`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project ?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project'
        },
        {
            type: 'input',
            name: 'installtion',
            message: "provide instructions for installation"
        },
        {
            type: 'input', 
            name: 'usage ',
            message: 'Provide guidelines for usage'
        },
        {
            type: 'input', 
            name: 'contribution',
            message: 'Provide guidelines for contribution'
        },
        {
            type: 'input', 
            name: 'test',
            message: 'Provide Testing instructions '
        },
        {
            type: 'input', 
            name: 'github',
            message: 'Plese enter your Github username'
        },
        {
            type: 'input', 
            name: 'email',
            message: 'Please provide an email'
        },
    ])
    .then((info) => {
        const readmeFile = readmeGenerator(info);
    
        Fs.writeFile('READme.md', readmeFile, (err) =>
        err ? console.log(err) : console.log('Successfully created READme.md!')
      );
    });
