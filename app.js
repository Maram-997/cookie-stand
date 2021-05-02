'use strict';
let seatlle = {
    location : 'seatlle',
    min : 23,
    max : 65,
    avg : 6.3,
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

    render:function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
    
for (let i = 0; i < seatlle.workingHours.length; i ++) {
    let liEl = document.createElement('li');
    liEl.textContent = (`${this.workingHours[i]} ${this.getAvg(this.min,this.max)} cookies`);
    ulEl.appendChild(liEl);
    this.total = this.total + this.getAvg(this.min,this.max);
} 
let liEl = document.createElement('li');
liEl.textContent = (`total ${this.total} cookies`);
ulEl.appendChild(liEl);
},


  getAvg: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.avgCookies = Math.floor(Math.random() * (max - min + 1) + min)*this.avg;
}
} 

seatlle.render(); 


let Tokyo = {
    location : 'Tokyo',
    min : 3,
    max : 24,
    avg : 1.2,
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

    render:function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
    
for (let i = 0; i < seatlle.workingHours.length; i ++) {
    let liEl = document.createElement('li');
    liEl.textContent = (`${this.workingHours[i]} ${this.getAvg(this.min,this.max)} cookies`);
    ulEl.appendChild(liEl);
    this.total = this.total + this.getAvg(this.min,this.max);
} 
let liEl = document.createElement('li');
liEl.textContent = (`total ${this.total} cookies`);
ulEl.appendChild(liEl);
},


  getAvg: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.avgCookies = Math.floor(Math.random() * (max - min + 1) + min)*this.avg;
}
} 

Tokyo.render(); 
let Dubai = {
    location : 'Dubai',
    min : 11,
    max : 38,
    avg : 3.7,
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

    render:function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
    
for (let i = 0; i < seatlle.workingHours.length; i ++) {
    let liEl = document.createElement('li');
    liEl.textContent = (`${this.workingHours[i]} ${this.getAvg(this.min,this.max)} cookies`);
    ulEl.appendChild(liEl);
    this.total = this.total + this.getAvg(this.min,this.max);
} 
let liEl = document.createElement('li');
liEl.textContent = (`total ${this.total} cookies`);
ulEl.appendChild(liEl);
},


  getAvg: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.avgCookies = Math.floor(Math.random() * (max - min + 1) + min)*this.avg;
}
} 

Dubai.render(); 
let Paris = {
    location : 'Paris',
    min : 20,
    max : 38,
    avg : 2.3,
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

    render:function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
    
for (let i = 0; i < seatlle.workingHours.length; i ++) {
    let liEl = document.createElement('li');
    liEl.textContent = (`${this.workingHours[i]} ${this.getAvg(this.min,this.max)} cookies`);
    ulEl.appendChild(liEl);
    this.total = this.total + this.getAvg(this.min,this.max);
} 
let liEl = document.createElement('li');
liEl.textContent = (`total ${this.total} cookies`);
ulEl.appendChild(liEl);
},


  getAvg: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.avgCookies = Math.floor(Math.random() * (max - min + 1) + min)*this.avg;
}
} 

Paris.render(); 

let Lima = {
    location : 'Lima',
    min : 2,
    max : 16,
    avg : 4.6,
    avgCookies : 0,
    total : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

    render:function () {
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
    
for (let i = 0; i < seatlle.workingHours.length; i ++) {
    let liEl = document.createElement('li');
    liEl.textContent = (`${this.workingHours[i]} ${this.getAvg(this.min,this.max)} cookies`);
    ulEl.appendChild(liEl);
    this.total = this.total + this.getAvg(this.min,this.max);
} 
let liEl = document.createElement('li');
liEl.textContent = (`total ${this.total} cookies`);
ulEl.appendChild(liEl);
},


  getAvg: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.avgCookies = Math.floor(Math.random() * (max - min + 1) + min)*this.avg;
}
} 

Lima.render(); 