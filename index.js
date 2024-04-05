// Code your solution here
const drivers = [
    {
      name: 'Mary',
      hometown: 'Garden Estate' },
    {
      name: 'Sam',
      hometown: 'kayole' } ,
    {
      name: 'Stasha',
      hometown: 'Dangoretti' },
    {
      name: 'Annette',
      hometown: 'Ngong' },
    {
      name: 'Bobby',
      hometown: 'Buruburu' }
  ];

function findMatching(drivers, name) {
    return  drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver[0] === name[0])
}

function matchName(drivers, name) { 
    return drivers.filter(driver => driver.name === name)
    }