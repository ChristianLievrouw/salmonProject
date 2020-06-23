// 'use strict';
// console.log('This file is connected.');

var storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
// function randomCustomerNumbers(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var storeOne = {
//   name: 'Seattle',
//   minCus: 23,
//   maxCus: 65,
//   avgCookieSale: 6.3,
//   totalHourlyCookies: 0,
//   customerEachHour: [],
//   cookiesEachHour: [],

//   calcCustomerPerHour: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus));
//       console.log('this.customerEachHour', this.customerEachHour);
//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomerPerHour();
//     for(var i = 0; i < storeHours.length; i++) {
//       var oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookieSale);
//       this.cookiesEachHour.push(oneHour);
//       console.log('this.cookiesEachHour', this.cookiesEachHour);
//       this.totalHourlyCookies += oneHour;
//       console.log('this.totalHourlyCookies', this.totalHourlyCookies);
//     }
//   },

//   render() {
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('seattle');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = storeHours[i] + this.cookiesEachHour[i] + ' cookies.';
//       console.log('listItems.textContent');
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Totals: ' + this.totalHourlyCookies + ' cookies.';
//     console.log('listItems.textContent', listItems.textContent);
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeTwo = {
//   name: 'Tokyo',
//   minCus: 3,
//   maxCus: 24,
//   avgCookieSale: 1.2,
//   totalHourlyCookies: 0,
//   customerEachHour: [],
//   cookiesEachHour: [],

//   calcCustomerPerHour: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus));
//       console.log('this.customerEachHour', this.customerEachHour);
//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomerPerHour();
//     for(var i = 0; i < storeHours.length; i++) {
//       var oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookieSale);
//       this.cookiesEachHour.push(oneHour);
//       console.log('this.cookiesEachHour', this.cookiesEachHour);
//       this.totalHourlyCookies += oneHour;
//       console.log('this.totalHourlyCookies', this.totalHourlyCookies);
//     }
//   },

//   render() {
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('seattle');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = storeHours[i] + this.cookiesEachHour[i] + ' cookies.';
//       console.log('listItems.textContent');
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Totals: ' + this.totalHourlyCookies + ' cookies.';
//     console.log('listItems.textContent', listItems.textContent);
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeThree = {
//   name: 'Dubai',
//   minCus: 11,
//   maxCus: 38,
//   avgCookieSale: 3.7,
//   totalHourlyCookies: 0,
//   customerEachHour: [],
//   cookiesEachHour: [],

//   calcCustomerPerHour: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus));
//       console.log('this.customerEachHour', this.customerEachHour);
//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomerPerHour();
//     for(var i = 0; i < storeHours.length; i++) {
//       var oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookieSale);
//       this.cookiesEachHour.push(oneHour);
//       console.log('this.cookiesEachHour', this.cookiesEachHour);
//       this.totalHourlyCookies += oneHour;
//       console.log('this.totalHourlyCookies', this.totalHourlyCookies);
//     }
//   },

//   render() {
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('seattle');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = storeHours[i] + this.cookiesEachHour[i] + ' cookies.';
//       console.log('listItems.textContent');
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Totals: ' + this.totalHourlyCookies + ' cookies.';
//     console.log('listItems.textContent', listItems.textContent);
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeFour = {
//   name: 'Pairs',
//   minCus: 20,
//   maxCus: 38,
//   avgCookieSale: 2.8,
//   totalHourlyCookies: 0,
//   customerEachHour: [],
//   cookiesEachHour: [],

//   calcCustomerPerHour: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus));
//       console.log('this.customerEachHour', this.customerEachHour);
//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomerPerHour();
//     for(var i = 0; i < storeHours.length; i++) {
//       var oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookieSale);
//       this.cookiesEachHour.push(oneHour);
//       console.log('this.cookiesEachHour', this.cookiesEachHour);
//       this.totalHourlyCookies += oneHour;
//       console.log('this.totalHourlyCookies', this.totalHourlyCookies);
//     }
//   },

//   render() {
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('seattle');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = storeHours[i] + this.cookiesEachHour[i] + ' cookies.';
//       console.log('listItems.textContent');
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Totals: ' + this.totalHourlyCookies + ' cookies.';
//     console.log('listItems.textContent', listItems.textContent);
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeFive = {
//   name: 'Lima',
//   minCus: 2,
//   maxCus: 16,
//   avgCookieSale: 4.6,
//   totalHourlyCookies: 0,
//   customerEachHour: [],
//   cookiesEachHour: [],

//   calcCustomerPerHour: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus));
//       console.log('this.customerEachHour', this.customerEachHour);
//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustomerPerHour();
//     for(var i = 0; i < storeHours.length; i++) {
//       var oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookieSale);
//       this.cookiesEachHour.push(oneHour);
//       console.log('this.cookiesEachHour', this.cookiesEachHour);
//       this.totalHourlyCookies += oneHour;
//       console.log('this.totalHourlyCookies', this.totalHourlyCookies);
//     }
//   },

//   render() {
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('seattle');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = storeHours[i] + this.cookiesEachHour[i] + ' cookies.';
//       console.log('listItems.textContent');
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Totals: ' + this.totalHourlyCookies + ' cookies.';
//     console.log('listItems.textContent', listItems.textContent);
//     unorderedList.appendChild(listItems);
//   }
// };


// var allShops = [storeOne, storeTwo, storeThree, storeFour, storeFive];
// function renderAllShops() {
//   for(var i = 0; i < allShops.length; i++){
//     allShops[i].render();
//   }
// }
// renderAllShops();
// console.log(storeOne);

function Store(storeName, minCus, maxCus, avgCookieSale){
  this.storeName = storeName;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieSale = avgCookieSale;
  this.customerEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesDaily = 0;
}
Store.prototype.calcTotalCustomerEachHour = function() {
  for(var i = 0; i < storeHours.length; i++){
    this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus));
    // console.log(this.customerEachHour);
  }
};
Store.prototype.calcCookiesEachHour = function() {
  this.calcTotalCustomerEachHour();
  for(var i = 0; i < storeHours.length; i++) {
    var oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookieSale);
    this.cookiesEachHour.push(oneHour);
    console.log('this.cookiesEachHour', this.cookiesEachHour);
    this.totalCookiesDaily = this.totalCookiesDaily + oneHour;
    console.log('this.totalHourlyCookies', this.totalCookiesDaily);
  }
};
Store.prototype.render = function() {
  this.calcCookiesEachHour();
  var table = document.getElementById('seattle');
  for(var i = 0; i < storeHours.length; i++){
    var listItems = document.createElement('li');
    listItems.textContent = storeHours[i] + this.cookiesEachHour[i] + ' cookies.';
    console.log('listItems.textContent');
    table.appendChild(listItems);
  }
  listItems = document.createElement('li');
  listItems.textContent = 'Totals: ' + this.totalCookiesDaily + ' cookies.';
  console.log('listItems.textContent', listItems.textContent);
  table.appendChild(listItems);
};
function randomCustomerNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var storeOne = new Store('Seattle', 23, 65, 6.3);
var storeTwo = new Store('Tokyo', 3, 24, 1.2);
var storeThree = new Store('Dubai', 3, 24, 1.2);
var storeFour = new Store('Paris', 20, 38, 2.3);
var storeFive = new Store('Lima', 2, 16, 4.6);
var storeSix = new Store('Texas', 34, 56, 3.7); //Testing for loop


var store = [storeOne, storeTwo, storeThree, storeFour, storeFive, storeSix];

for(var i = 0; i < store.length; i++){
  store[i].render();
}

var headOfTable = document.getElementById('tableHead');
var tableRow = document.createElement('th');
for(i = 0; i < storeHours.length; i++){
  tableRow.textContent = storeHours[i];
}
headOfTable.appendChild(tableRow);
tableRow.render();
