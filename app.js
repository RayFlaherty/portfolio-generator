const inquirer= require ('inquirer');
// const fs =require('fs);
// const generatePage = require('./src/page-template');




inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'

    }
  ])

  .then(answers => console.log(answers));

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
