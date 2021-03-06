const inquirer= require ('inquirer');
// const fs =require('fs);
// const generatePage = require('./src/page-template');




inquirer
  //.prompt([
    //{
      //type: 'input',
      //name: 'name',
      //message: 'What is your name?'

    //}
  //])

  //.then(answers => console.log(answers));

const promptUser= () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
     type:'input',
      name:'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name:'about',
      message:'Provide some information about yourself:'
   }
  ]);
};

promptUser().then(answers=> console.log(answers));

const promptProject = portfolioData => {
  
  //If there's no 'projects' array property, create one
  if (!portfolioData.projects){
    portfolioData.projects = [];
  }
  console.log(`
  ===============
    Add a New Project
    =============
  `);
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type:'input',
      name:'description',
      message:'Provide a description of the project (Required)'
    },
    {
      type:'checkbox',
      name:'languages',
      message:'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript','HTML','CSS','ES6','jQuery','Bootstrap','Node']
    },
    {
      type:'input',
      name:'link',
      message:'Enter the GitHub link to your project. (Required)'
    },
    {
      type:'confirm',
      name:'feature',
      message:'Would you like to feature this project?',
      default:false
    },
    {
      type:'confirm',
      name:'confirmAddProject',
      message:'Would you like to enter another project?',
      default:false
    }
  ]);
};

promptUser()
.then(promptProject)
.then (portfolioData => {
  console.log(portfolioData);

  });
 // const fs = require('fs');

//const profileDataArgs = process.argv.slice(2);

//const [name, github] = profileDataArgs;
//const generatePage = (name, github);
  //return `
   //<!DOCTYPE html>
   //<html lang="en">
   //<head>
    //<meta charset="UTRF-8">
    //<meta name = "viewport" content ="width=device-width, initial-scale=1.0">
    //<meta http-equiv="X-UA-Compatible" content="ie=edge">
    //<title>Portfolio Demo</title>
   //</head>
   
   //<body>
    // <h1>${name}</h1>
    // <h2><a href="https://github.com/${github}">Github</a></h2>
   //</body>
   //</html>
  //`; 
//};
//fs  .writeFile('./index.html', pageHTML,err=> {
  //if (err) throw err;
  
  //console.log('Portfolio complete! Check out index.html to see the output!')
//});


//const printProfileData = profileDataArr => {
  //This...
  //for (let i =0; i < profileDataArr.Length; i += 1) {
    //console.log(profileDataArr[i]);
  //}
  
  //console.log('===================');
  
  //Is the same as this ..
  //profileDataArr.forEach(profileItem => console.log(profileItem));
    
 
//};

//printProfileData (profileDataArgs);
