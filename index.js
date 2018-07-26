// Write your solution in this file!
const driver={name:"Larry"};

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj= Object.assign(driver, {key: value});
  return newObj;
}