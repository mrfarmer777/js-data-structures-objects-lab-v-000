// Write your solution in this file!
const driver={};

function updateDriverWithKeyAndValue(driver, key, value){
  const newObject={};
  Object.assign(newObject,driver);
  newObject[key]=value;
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(drv,key,value){
  drv[key]=value;
  return drv;
}

function deleteFromDriverByKey(drv,key){
  newDrv={};
  Object.assign(newDrv,drv);
  delete newDrv[key];
  return newDrv;
}