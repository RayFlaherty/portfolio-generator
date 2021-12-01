const profileDataArgs= process.argv.slice(2,process.argv.length);
const generatePage= (userName, githubName) => 'Name: ${userName}, Github: ${githubName}';

console.log(generatePage('Ray', 'RayFlaherty'));
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
