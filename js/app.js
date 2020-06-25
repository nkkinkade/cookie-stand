'use strict';
console.log('app.js is connected, Yay!');

var hoursOperation = ['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustomerNumbers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

var tableElement = document.getElementById('sales-table');

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}
CookieStand.prototype.calcCustomersEachHour = function() {
  for(var i = 0; i < hoursOperation.length; i++){
    this.customersEachHour.push(randomCustomerNumbers(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};
CookieStand.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for(var i = 0; i < hoursOperation.length; i++){
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};
CookieStand.prototype.render = function() {
  this.calcCookiesEachHour();
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.locationName;
  tableRow.appendChild(tableData);
  for(var i =0; i < hoursOperation.length; i++){
    tableData = document.createElement('td');
    tableData.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableData);
  }
  var tableDailyTotal = document.createElement('th');
  tableDailyTotal.textContent = this.totalDailyCookies;
  tableRow.appendChild(tableDailyTotal);
  tableElement.appendChild(tableRow);
};

var storeOne = new CookieStand('Seattle', 23, 65, 6.3);

var storeTwo = new CookieStand('Tokyo', 3, 24, 1.2);

var storeThree = new CookieStand('Dubai', 11, 38, 3.7);

var storeFour = new CookieStand('Paris', 20, 38, 2.3);

var storeFive = new CookieStand('Lima', 2, 16, 4.6);

var allShops = [storeOne, storeTwo, storeThree, storeFour, storeFive];

// function makeHeaderRow(){

// }

// function makeFooterRow(){
//   for(){

//     for(){

//     }
//   }
// }

function renderAllData(){
  for(var i = 0; i < allShops.length; i++){
    allShops[i].render();
  }
}

renderAllData();


