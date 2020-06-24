'use strict';
console.log('This file is connected.');

var storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function randomCustomerNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
    this.customerEachHour.push(randomCustomerNumbers(this.minCus, this.maxCus));
    // console.log(this.customerEachHour);
  }
};
Store.prototype.calcCookiesEachHour = function() {
  this.calcTotalCustomerEachHour();
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
  this.calcCookiesEachHour();
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
function makeHeaderRow(){
  var mainHeader = document.getElementById('sales-table');
  var timeLabel = document.createElement('th');
  timeLabel.textContent = '';
  mainHeader.appendChild(timeLabel);
  for(var i = 0; i < storeHours.length; i++){
    var timeHeader = document.createElement('th');
    timeHeader.textContent = storeHours[i];
    mainHeader.appendChild(timeHeader);
  }
}

function makeFooterRow(){
var mainFooter = document.getElementById('sales-table');
var footer = document.createElement('tfoot');
for(var i = 0; i < storeHours.length; i++){
  
    for(){

    }
  }
}






// Each cookie stand location should have a separate render() method that creates and appends its row to the table
// The header row and footer row are each created in their own stand-alone function

function renderAllData() {
  makeHeaderRow();

  for(var i = 0; i < allStore.length; i++){
    allStore[i].render();
  }

  //makeFooterRow();

}


renderAllData();
