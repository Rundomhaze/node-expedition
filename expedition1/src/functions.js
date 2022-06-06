const fs = require('fs');

const crew = fs.readFileSync('./src/crew.txt', 'utf-8');
const equipment = fs.readFileSync('./src/equipment.txt', 'utf-8');
const rockets = fs.readFileSync('./src/rockets.txt', 'utf-8');


function getRightCaptain() {
  let arrCap = crew.split('\n').filter((el) => el.includes('Капитан'))
    .map((el) => el.split(' ')[4])
    .sort((a, b) => a - b);
  let result = crew.split('\n').filter((el) => el.includes(arrCap[arrCap.length - 1]))
  return result.join(' ');

};

function getRightDoc() {
  let arrDoc = crew.split('\n').filter((el) => el.includes('Врач'))
    .filter((el) => el.includes('ж,'))
    .map((el) => el.split(' ')[4])
    .sort((a, b) => b - a)
  let result = crew.split('\n').filter((el) => el.includes(arrDoc[0]))
  return result.join(' ')
};

function getAllEngineer() {
  return crew.split('\n').filter((el) => el.includes('Бортмеханик'));
};

function getAllRover() {
  return equipment.split('\n').filter((el) => el.includes('марсоход'));
};

function getRightRovers() {
  let result = getAllRover().filter((el) => el.split(' ')[2] > 3)
  return result;
};

function getRightRocket() {
  let rocketsBetweenStar = rockets.split('\n')
    .filter((el) => el.includes('межзвездная'))
    .map((el) => el.split(' '))
    .sort((a, b) => b[2] - a[2])
  let res = rocketsBetweenStar[0]
    .map((el) => +el);
  return res;
};

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket
};
