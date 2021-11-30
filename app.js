const profileDataArgs= process.argv.slice(2,process.argv.length);

const printProfileData = profileDataArr => {
  //This...
  for (let i =0; i < profileDataArr.Length; i += 1) {
    console.log(profileDataArr[i]);
  }
  
  console.log('===================');
  
  //Is the same as this ..
  profileDataArr.forEach(profileItem => cosole.log(profileItem));
    
 
};

printProfileData (profileDataArgs);
