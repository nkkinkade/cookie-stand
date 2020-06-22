'use strict';
console.log('app.js is connected');

var hoursOp = ['6 AM','7 AM','8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

function randomCustHour(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

var seattle = {
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  custHour: 0,
  setCustHour: function(){
    this.custHour = randomCustHour(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function(){
    this.setCustHour();
    this.cookiesSold.push(Math.floor(this.avgCook * this.custHour));
  }
};
for (var i = 0; i < hoursOp.length; i++){
  seattle.setCookiesSold();
}
// function sumArray(sumArr) {
//     var sumArray = 
// }
console.log(seattle.cookiesSold);

var tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  custHour: 0,
  setCustHour: function(){
    this.custHour = randomCustHour(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function(){
    this.setCustHour();
    this.cookiesSold.push(Math.floor(this.avgCook * this.custHour));
  }
};
for (i = 0; i < hoursOp.length; i++){
  tokyo.setCookiesSold();
}
// console.log(tokyo.cookiesSold);

var dubai = {
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  custHour: 0,
  setCustHour: function(){
    this.custHour = randomCustHour(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function(){
    this.setCustHour();
    this.cookiesSold.push(Math.floor(this.avgCook * this.custHour));
  }
};
for (i = 0; i < hoursOp.length; i++){
  dubai.setCookiesSold();
}
// console.log(dubai.cookiesSold)

var paris = {
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  custHour: 0,
  setCustHour: function(){
    this.custHour = randomCustHour(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function(){
    this.setCustHour();
    this.cookiesSold.push(Math.floor(this.avgCook * this.custHour));
  }
};
for (i = 0; i < hoursOp.length; i++){
  paris.setCookiesSold();
}
// console.log(paris.cookiesSold)

var lima = {
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  custHour: 0,
  setCustHour: function(){
    this.custHour = randomCustHour(this.minCust, this.maxCust);
  },
  cookiesSold: [],
  setCookiesSold: function(){
    this.setCustHour();
    this.cookiesSold.push(Math.floor(this.avgCook * this.custHour));
  }
};
for (i = 0; i < hoursOp.length; i++){
  lima.setCookiesSold();
}
// console.log(lima.cookiesSold);

// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
// 5. Display the values of each array as unordered lists in the browser
// 6. Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies
