const chalk = require('chalk');
const moment = require('moment');
let m = moment();
function dateFacts() {
  let dayDateTime = m.format('dddd, MMMM Do YYYY, h:mm:ss a');
  let dayth = m.format('DDDo');
  let seconds = moment.duration(moment().format('HH:mm:ss')).asSeconds();
  let daylightST = '';
  let leapYear = '';

  if (moment([m]).isDST() == true) {
    daylightST = 'is';
  } else {
    daylightST = 'is not';
  }

  if (m.isLeapYear()) {
    leapYear = 'is';
  } else {
    leapYear = 'is not';
  }

  console.log('It is', chalk.blue.bold(dayDateTime));
  console.log('It is the', chalk.blueBright.bold(dayth) , 'of the year.');
  console.log('It is', chalk.cyan.bold(seconds), ' seconds into the day.');
  console.log('It', chalk.green.bold(daylightST), 'during Daylight Savings Time.');
  console.log('It', chalk.redBright.bold(leapYear), 'not a leap year.');
}
dateFacts()
