'use strict';
console.log('This file is connected.');

var storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function randomCustomerNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // 1
}

var tableElement = document.getElementById('sales-table');

//Constructor function builds objects
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
    this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus)); // F, 2
    // console.log(this.customerEachHour);
  }
};
Store.prototype.calcCookiesEachHour = function() {
  this.calcTotalCustomerEachHour(); // E, 3
  for(var i = 0; i < storeHours.length; i++) {
    var oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookieSale);
    this.cookiesEachHour.push(oneHour);
    // console.log('this.cookiesEachHour', this.cookiesEachHour);
    this.totalCookiesDaily = this.totalCookiesDaily + oneHour;
    // console.log('this.totalHourlyCookies', this.totalCookiesDaily);
  }
};






// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.
Store.prototype.render = function() {
  this.calcCookiesEachHour(); // D, 4
  //create tr
  var tableRow = document.createElement('tr');
  //creat td
  var tableData = document.createElement('td');
  tableData.textContent = this.storeName;
  //append td to tr
  tableRow.appendChild(tableData);

  //fill the table with data from objects
  for(var i = 0; i < storeHours.length; i++){
    //create a td for each hour via for loop
    tableData = document.createElement('td');
    //adds data to the cell
    tableData.textContent = this.cookiesEachHour[i];
    //append the tds' to tr that was created on line 49
    tableRow.appendChild(tableData);
  }
  //create total cookie for store in the last column
  var tableDailyTotal = document.createElement('th');
  //last element is getting the total cookies in bold.
  tableDailyTotal.textContent = this.totalCookiesDaily;

  //Takes the tr and appends to the table row , is the tr on 49.
  tableRow.appendChild(tableDailyTotal);
  //table is complete  and append to the table variable created on line 10
  tableElement.appendChild(tableRow);
};

var storeOne = new Store('Seattle', 23, 65, 6.3);
// storeOne.calcCookiesEachHour();
// storeOne.calcTotalCustomerEachHour();
var storeTwo = new Store('Tokyo', 3, 24, 1.2);
var storeThree = new Store('Dubai', 3, 24, 1.2);
var storeFour = new Store('Paris', 20, 38, 2.3);
var storeFive = new Store('Lima', 2, 16, 4.6);
var storeSix = new Store('Texas', 34, 56, 3.7); //Testing for loop


var allStore = [storeOne, storeTwo, storeThree, storeFour, storeFive, storeSix];

// create some tags add 'Location
// actually use the values from our store hours arrays for
// create another tag daily total location.
var salesTable = document.getElementById('sales-table');
function makeHeaderRow(){
  var timeLabel = document.createElement('th');
  timeLabel.textContent = 'Locations';
  salesTable.appendChild(timeLabel);
  for(var i = 0; i < storeHours.length; i++){
    var timeHeader = document.createElement('th');
    timeHeader.textContent = storeHours[i];
    salesTable.appendChild(timeHeader);
  }
  var total = document.createElement('th');

  total.textContent = 'Total';
  salesTable.appendChild(total);
}
function makeFooterRow(){
  var footerText = document.createElement('th');
  footerText.textContent = 'Total Hourly';
  salesTable.appendChild(footerText);
  for(var i = 0; i < storeHours.length; i ++){
    var totalOfHours = 0;
    for(var j = 0; j < allStore.length; j++){
      totalOfHours += allStore[j].cookiesEachHour[i];
    }
    var footerTotals = document.createElement('th');
    footerTotals.textContent = totalOfHours;
    salesTable.appendChild(footerTotals);
  }
  var finalTotal = document.createElement('th');
  var totalValue = 0;
  for(var x = 0; x < allStore.length; x++){
    totalValue += allStore[x].totalCookiesDaily;
  }
  finalTotal.textContent = totalValue;
  salesTable.appendChild(finalTotal);
}

function renderAllData() {
  salesTable.innerHTML = '';
  makeHeaderRow(); // B

  for(var i = 0; i < allStore.length; i++){
    allStore[i].render(); // C, DONE
  }
  makeFooterRow(); // E\
}

renderAllData(); // start A

function handleFormSubmitted(event){
  event.preventDefault();
  var locationInput = document.getElementById('storeLocation');
  var locationValue = locationInput.value;
  var minCusInput = document.getElementById('minCus');
  var minCusValue = minCusInput.value;
  var maxCusInput = document.getElementById('maxCus');
  var maxCusValue = maxCusInput.value;
  var avgCookieInput = document.getElementById('avgCookieSale');
  var avgCookeValue = avgCookieInput.value;

  var newStore = new Store(locationValue, minCusValue, maxCusValue, avgCookeValue);
  allStore.push(newStore);
  renderAllData();
  // makeFooterRow();

  var form = document.getElementById('store-form');
  form.reset();
}

var formElement = document.getElementById('store-form');
formElement.addEventListener('submit', handleFormSubmitted);
