// Write your solution in this file!
const driver={name:"Larry"};

function updateDriverWithKeyAndValue(driver, key, value){
  const newObject= Object.assign(driver);
  newObject[key]=value;
  return newObject;
}