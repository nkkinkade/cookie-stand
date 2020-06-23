'use strict';
console.log('app.js is connected, Yay!');

var hoursOperration = ['6am','7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustomerNumbers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

var storeOne = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  totalHourlyCookies: 0,
  customersEachHour: [],
  cookiesEachHour: [],

  calcCustomersPerHour: function(){
    for(var i = 0; i < hoursOperration.length; i++){
      this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },

  calcCookiesEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < hoursOperration.length; i++){
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
      this.cookiesEachHour.push(oneHour);
      this.totalHourlyCookies += oneHour;
    }
  },
  render(){
    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('seattle');
    var nameTitle = document.createElement('h2');
    nameTitle.textContent = this.name;
    unorderedList.appendChild(nameTitle);
    for(var i = 0; i < hoursOperration.length; i++){
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperration[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
    unorderedList.appendChild(listItems);
  }
};

var storeTwo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  totalHourlyCookies: 0,
  customersEachHour: [],
  cookiesEachHour: [],

  calcCustomersPerHour: function(){
    for(var i = 0; i < hoursOperration.length; i++){
      this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },

  calcCookiesEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < hoursOperration.length; i++){
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
      this.cookiesEachHour.push(oneHour);
      this.totalHourlyCookies += oneHour;
    }
  },
  render(){
    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('tokyo');
    var nameTitle = document.createElement('h2');
    nameTitle.textContent = this.name;
    unorderedList.appendChild(nameTitle);
    for(var i = 0; i < hoursOperration.length; i++){
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperration[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
    unorderedList.appendChild(listItems);
  }
};

var storeThree = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  totalHourlyCookies: 0,
  customersEachHour: [],
  cookiesEachHour: [],

  calcCustomersPerHour: function(){
    for(var i = 0; i < hoursOperration.length; i++){
      this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },

  calcCookiesEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < hoursOperration.length; i++){
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
      this.cookiesEachHour.push(oneHour);
      this.totalHourlyCookies += oneHour;
    }
  },
  render(){
    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('dubai');
    var nameTitle = document.createElement('h2');
    nameTitle.textContent = this.name;
    unorderedList.appendChild(nameTitle);
    for(var i = 0; i < hoursOperration.length; i++){
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperration[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
    unorderedList.appendChild(listItems);
  }
};

var storeFour = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  totalHourlyCookies: 0,
  customersEachHour: [],
  cookiesEachHour: [],

  calcCustomersPerHour: function(){
    for(var i = 0; i < hoursOperration.length; i++){
      this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },

  calcCookiesEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < hoursOperration.length; i++){
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
      this.cookiesEachHour.push(oneHour);
      this.totalHourlyCookies += oneHour;
    }
  },
  render(){
    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('paris');
    var nameTitle = document.createElement('h2');
    nameTitle.textContent = this.name;
    unorderedList.appendChild(nameTitle);
    for(var i = 0; i < hoursOperration.length; i++){
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperration[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
    unorderedList.appendChild(listItems);
  }
};

var storeFive = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  totalHourlyCookies: 0,
  customersEachHour: [],
  cookiesEachHour: [],

  calcCustomersPerHour: function(){
    for(var i = 0; i < hoursOperration.length; i++){
      this.customersEachHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },

  calcCookiesEachHour: function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < hoursOperration.length; i++){
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCook);
      this.cookiesEachHour.push(oneHour);
      this.totalHourlyCookies += oneHour;
    }
  },
  render(){
    this.calcCookiesEachHour();
    var unorderedList = document.getElementById('lima');
    var nameTitle = document.createElement('h2');
    nameTitle.textContent = this.name;
    unorderedList.appendChild(nameTitle);
    for(var i = 0; i < hoursOperration.length; i++){
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperration[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total: ' + this.totalHourlyCookies + ' cookies';
    unorderedList.appendChild(listItems);
  }
};

var allShops = [storeOne, storeTwo, storeThree, storeFour, storeFive];

function renderAllShops(){
  for(var i = 0; i < allShops.length; i++){
    allShops[i].render();
  }
}

renderAllShops();

// // // 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
// // // 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// // // 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// // // 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
// // // 5. Display the values of each array as unordered lists in the browser
// // // 6. Calculating the sum of these hourly totals; your output for each location should look like this:

// // // Seattle

// // // 6am: 16 cookies
// // // 7am: 20 cookies
// // // 8am: 35 cookies
// // // 9am: 48 cookies
// // // 10am: 56 cookies
// // // 11am: 77 cookies
// // // 12pm: 93 cookies
// // // 1pm: 144 cookies
// // // 2pm: 119 cookies
// // // 3pm: 84 cookies
// // // 4pm: 61 cookies
// // // 5pm: 23 cookies
// // // 6pm: 42 cookies
// // // 7pm: 57 cookies
// // // Total: 875 cookies
