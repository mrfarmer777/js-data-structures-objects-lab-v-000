// Write your solution in this file!
const driver={};

function updateDriverWithKeyAndValue(driver, key, value){
  const newObject={};
  Object.assign(newObject,driver);
  newObject[key]=value;
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(key,value){
  driver[key]=value;
  return driver;
}