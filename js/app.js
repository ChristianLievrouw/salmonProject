'use strict';
console.log('This file is connected.');

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];


var seattleStore = {
  sumOfCookieDay: 0,
  minHourCus: 23,
  maxHourCus: 65,
  avgCookiePerCus: 6.3,
  cusPerHour: 0,
  setCusPerHour: function() {
    this.cusPerHour = randomNumber(this.minHourCus, this.maxHourCus);
    console.log(this.cusPerHour, ' customers at');
  },
  cookiesSoldPerHour: [],
  setCookiesPerHour: function() {
    this.setCusPerHour();
    this.cookiesSoldPerHour.push(Math.floor((this.cusPerHour) * this.avgCookiePerCus));
    console.log(this.cookiesSoldPerHour);
  },

};
seattleStore.setCusPerHour();


for(var i = 0; i < storeHours.length - 1; i++){
  seattleStore.setCookiesPerHour();
}
function randomNumber(minHourCus, maxHourCus) {
  return Math.floor(Math.random() * (maxHourCus - minHourCus + 1) + minHourCus);
}

var sectionElement = document.getElementById('list');
var ul = document.createElement('ul');
for(var i = 0; i < storeHours.length; i++) {
  var li = document.createElement('li');
  li.textContent = storeHours[i] + ': ' + seattleStore.cookiesSoldPerHour[i] + ' cookies';
  ul.append(li);
}
sectionElement.appendChild(ul);

