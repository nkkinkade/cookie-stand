'use strict';
console.log('app.js is connected, Yay!');

var hoursOperation = ['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustomerNumbers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

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
  var unorderedList = document.getElementById('seattle');
  var nameTitle = document.createElement('h2');
  nameTitle.textContent = this.locationName;
  unorderedList.appendChild(nameTitle);
  for(var i = 0; i < hoursOperation.length; i++){
    var listItems = document.createElement('li');
    listItems.textContent = hoursOperation[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
    unorderedList.appendChild(listItems);
  }
  listItems = document.createElement('li');
  listItems.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
  unorderedList.appendChild(listItems);
};

var storeOne = new CookieStand('Seattle', 23, 65, 6.3);
storeOne.calcCookiesEachHour();
storeOne.calcCustomersEachHour();

var storeTwo = new CookieStand('Tokyo', 3, 24, 1.2);
storeTwo.calcCookiesEachHour();
storeTwo.calcCustomersEachHour();

var storeThree = new CookieStand('Dubai', 11, 38, 3.7);
storeThree.calcCookiesEachHour();
storeThree.calcCustomersEachHour();

var storeFour = new CookieStand('Paris', 20, 38, 2.3);
storeFour.calcCookiesEachHour();
storeFour.calcCustomersEachHour();

var storeFive = new CookieStand('Lima', 2, 16, 4.6);
storeFive.calcCookiesEachHour();
storeFive.calcCustomersEachHour();

// var allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];





// var storeOne = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCook: 6.3,
//   totalHourlyCookies: 0,
//   customersEachHour: [],
//   cookiesEachHour: [],

//   calcCustomersPerHour: function(){
//     for(var i = 0; i < hoursOperation.length; i++){
//       this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
//     }
//   },

//   calcCookiesEachHour: function(){
//     this.calcCustomersPerHour();
//     for(var i = 0; i < hoursOperation.length; i++){
//       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
//       this.cookiesEachHour.push(oneHour);
//       this.totalHourlyCookies += oneHour;
//     }
//   },
//   render(){
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('seattle');
//     var nameTitle = document.createElement('h2');
//     nameTitle.textContent = this.name;
//     unorderedList.appendChild(nameTitle);
//     for(var i = 0; i < hoursOperation.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = hoursOperation[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeTwo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCook: 1.2,
//   totalHourlyCookies: 0,
//   customersEachHour: [],
//   cookiesEachHour: [],

//   calcCustomersPerHour: function(){
//     for(var i = 0; i < hoursOperation.length; i++){
//       this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
//     }
//   },

//   calcCookiesEachHour: function(){
//     this.calcCustomersPerHour();
//     for(var i = 0; i < hoursOperation.length; i++){
//       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
//       this.cookiesEachHour.push(oneHour);
//       this.totalHourlyCookies += oneHour;
//     }
//   },
//   render(){
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('tokyo');
//     var nameTitle = document.createElement('h2');
//     nameTitle.textContent = this.name;
//     unorderedList.appendChild(nameTitle);
//     for(var i = 0; i < hoursOperation.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = hoursOperation[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeThree = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCook: 3.7,
//   totalHourlyCookies: 0,
//   customersEachHour: [],
//   cookiesEachHour: [],

//   calcCustomersPerHour: function(){
//     for(var i = 0; i < hoursOperation.length; i++){
//       this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
//     }
//   },

//   calcCookiesEachHour: function(){
//     this.calcCustomersPerHour();
//     for(var i = 0; i < hoursOperation.length; i++){
//       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
//       this.cookiesEachHour.push(oneHour);
//       this.totalHourlyCookies += oneHour;
//     }
//   },
//   render(){
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('dubai');
//     var nameTitle = document.createElement('h2');
//     nameTitle.textContent = this.name;
//     unorderedList.appendChild(nameTitle);
//     for(var i = 0; i < hoursOperation.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = hoursOperation[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeFour = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCook: 2.3,
//   totalHourlyCookies: 0,
//   customersEachHour: [],
//   cookiesEachHour: [],

//   calcCustomersPerHour: function(){
//     for(var i = 0; i < hoursOperation.length; i++){
//       this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
//     }
//   },

//   calcCookiesEachHour: function(){
//     this.calcCustomersPerHour();
//     for(var i = 0; i < hoursOperation.length; i++){
//       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
//       this.cookiesEachHour.push(oneHour);
//       this.totalHourlyCookies += oneHour;
//     }
//   },
//   render(){
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('paris');
//     var nameTitle = document.createElement('h2');
//     nameTitle.textContent = this.name;
//     unorderedList.appendChild(nameTitle);
//     for(var i = 0; i < hoursOperation.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = hoursOperation[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
//     unorderedList.appendChild(listItems);
//   }
// };

// var storeFive = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCook: 4.6,
//   totalHourlyCookies: 0,
//   customersEachHour: [],
//   cookiesEachHour: [],

//   calcCustomersPerHour: function(){
//     for(var i = 0; i < hoursOperation.length; i++){
//       this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
//     }
//   },

//   calcCookiesEachHour: function(){
//     this.calcCustomersPerHour();
//     for(var i = 0; i < hoursOperation.length; i++){
//       var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
//       this.cookiesEachHour.push(oneHour);
//       this.totalHourlyCookies += oneHour;
//     }
//   },
//   render(){
//     this.calcCookiesEachHour();
//     var unorderedList = document.getElementById('lima');
//     var nameTitle = document.createElement('h2');
//     nameTitle.textContent = this.name;
//     unorderedList.appendChild(nameTitle);
//     for(var i = 0; i < hoursOperation.length; i++){
//       var listItems = document.createElement('li');
//       listItems.textContent = hoursOperation[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       unorderedList.appendChild(listItems);
//     }
//     listItems = document.createElement('li');
//     listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
//     unorderedList.appendChild(listItems);
//   }
// };

var allShops = [storeOne, storeTwo, storeThree, storeFour, storeFive];

function renderAllShops(){
  for(var i = 0; i < allShops.length; i++){
    allShops[i].render();
  }
}

renderAllShops();
