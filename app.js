'use strict';
let seatlle = {
    location : 'seatlle',
    min : 23,
    max : 65,
    avg : 6.3,
    salesPerHour: [],
    randomCustPerHour:[],
    avgCookies : 0,
    totalPerHour : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

randomCustPerHour: function(min,max){
    for (let h = 0; h < this.workingHours.length; h++ )
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

},
 salesPerHour: function (){
for (h = 0 ; h < this.workingHours.length;h++)
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookies));
this.totalPerHour += this.salesPerHour[i];
},


    render: function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let h = 0 ; h < this.workingHours.length; h++){
    let liEl = document.createElement('li');
    liEl.textContent = (`total ${this.total} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `${this.workingHours[hour]}:${this.salesPerHour[hour]} Cookies`
    }
}
 seatlle.randomCustPerHour();
 seatlle.salesPerHour();
 seatlle.render();

let Tokyo = {
    location : 'Tokyo',
    min : 3,
    max : 24,
    avg : 1.2,
    salesPerHour: [],
    randomCustPerHour:[],
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

randomCustPerHour: function(min,max){
    for (let h = 0; h < this.workingHours.length; h++ )
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    this.totalPerHour += this.salesPerHour[i];
},
 salesPerHour: function (){
for (h = 0 ; h < this.workingHours.length;h++)
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookies));
 },


    render: function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let h = 0 ; h < this.workingHours.length; h++){
    let liEl = document.createElement('li');
    liEl.textContent = (`total ${this.total} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `${this.workingHours[hour]}:${this.salesPerHour[hour]} Cookies`
    }
}

Tokyo.randomCustPerHour();
Tokyo.salesPerHour();
Tokyo.render();


let Dubai = {
    location : 'Dubai',
    min : 11,
    max : 38,
    avg : 3.7,
    salesPerHour: [],
    randomCustPerHour:[],
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

randomCustPerHour: function(min,max){
    for (let h = 0; h < this.workingHours.length; h++ )
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

},
 salesPerHour: function (){
for (h = 0 ; h < this.workingHours.length;h++)
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookies));
this.totalPerHour += this.salesPerHour[i];

},


    render: function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let h = 0 ; h < this.workingHours.length; h++){
    let liEl = document.createElement('li');
    liEl.textContent = (`total ${this.total} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `${this.workingHours[hour]}:${this.salesPerHour[hour]} Cookies`
    }
}

Dubai.randomCustPerHour();
Dubai.salesPerHour();
Dubai.render();


let Paris = {
    location : 'Paris',
    min : 20,
    max : 38,
    avg : 2.3,
    salesPerHour: [],
    randomCustPerHour:[],
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

randomCustPerHour: function(min,max){
    for (let h = 0; h < this.workingHours.length; h++ )
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

},
 salesPerHour: function (){
for (h = 0 ; h< this.workingHours.length;h++)
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookies));
this.totalPerHour += this.salesPerHour[i];
},


    render: function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let h = 0 ; h < this.workingHours.length; h++){
    let liEl = document.createElement('li');
    liEl.textContent = (`total ${this.total} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `${this.workingHours[hour]}:${this.salesPerHour[hour]} Cookies`
    }
}

Paris.randomCustPerHour();
Paris.salesPerHour();
Paris.render();

let Lima = {
    location : 'Lima',
    min : 2,
    max : 16,
    avg : 4.6,
    salesPerHour: [],
    randomCustPerHour:[],
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

randomCustPerHour: function(min,max){
    for (let h = 0; h < this.workingHours.length; h++ )
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

},
 salesPerHour: function (){
for (h = 0 ; h < this.workingHours.length;h++)
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookies));
this.totalPerHour += this.salesPerHour[i];

},


    render: function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let h = 0 ; h < this.workingHours.length; h++){
    let liEl = document.createElement('li');
    liEl.textContent = (`total ${this.total} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `${this.workingHours[hour]}:${this.salesPerHour[hour]} Cookies`
    }
}
Lima.randomCustPerHour();
Lima.salesPerHour();
Lima.render();