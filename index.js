// Write your solution in this file!
const driver={};

function updateDriverWithKeyAndValue(driver, key, value){
  const newObject={};
  Object.assign(newObject,driver,{key,value});
  //newObject[key]=value;
  return newObject;
}