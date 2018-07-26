// Write your solution in this file!
const driver={};

function updateDriverWithKeyAndValue(driver, key, value){
  const newObject={};
  Object.assign(newObject,driver);
  newObject[key]=value;
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(drv,key,value){
  console.log(driver);
  Object.assign(drv,{key:value});
  console.log(drv);
  return drv;
}