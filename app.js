'use strict';
let seatlle = {
    location : 'seatlle',
    min : 23,
    max : 65,
    avg : 6.3,
    salesPerHour: [],
    randomCustPerHour:[],
    totalPerHour : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

calculate : function(){
    for (let wh = 0; wh < this.workingHours.length; wh++ ){
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
},

 cookiesPerHour: function (){
     this.calculate();
for (let wh = 0 ; wh < this.workingHours.length;wh++){
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
this.totalPerHour += this.salesPerHour[wh];}
},


    render: function () {
        this.cookiesPerHour();
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let i = 0 ; i < this.workingHours.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `total :${this.totalPerHour} Cookies`
ulEl.appendChild(totalLi);
}

}
 
 seatlle.render();


 let Tokyo = {
    location : 'Tokyo',
    min : 3,
    max : 24,
    avg : 1.2,
    salesPerHour: [],
    randomCustPerHour:[],
    totalPerHour : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

calculate : function(){
    for (let wh = 0; wh < this.workingHours.length; wh++ ){
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
},

 cookiesPerHour: function (){
     this.calculate();
for (let wh = 0 ; wh < this.workingHours.length;wh++){
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
this.totalPerHour += this.salesPerHour[wh];}
},


    render: function () {
        this.cookiesPerHour();
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let i = 0 ; i < this.workingHours.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `total :${this.totalPerHour} Cookies`
ulEl.appendChild(totalLi);
}

}
 
 Tokyo.render();

 let Dubai = {
    location : 'Dubai',
    min : 11,
    max : 38,
    avg : 3.7,
    salesPerHour: [],
    randomCustPerHour:[],
    totalPerHour : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

calculate : function(){
    for (let wh = 0; wh < this.workingHours.length; wh++ ){
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
},

 cookiesPerHour: function (){
     this.calculate();
for (let wh = 0 ; wh < this.workingHours.length;wh++){
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
this.totalPerHour += this.salesPerHour[wh];}
},


    render: function () {
        this.cookiesPerHour();
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let i = 0 ; i < this.workingHours.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `total :${this.totalPerHour} Cookies`
ulEl.appendChild(totalLi);
}

}
 
 Dubai.render();

 let Paris = {
    location : 'Paris',
    min : 20,
    max : 38,
    avg : 2.3,
    salesPerHour: [],
    randomCustPerHour:[],
    totalPerHour : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

calculate : function(){
    for (let wh = 0; wh < this.workingHours.length; wh++ ){
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
},

 cookiesPerHour: function (){
     this.calculate();
for (let wh = 0 ; wh < this.workingHours.length;wh++){
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
this.totalPerHour += this.salesPerHour[wh];}
},


    render: function () {
        this.cookiesPerHour();
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let i = 0 ; i < this.workingHours.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `total :${this.totalPerHour} Cookies`
ulEl.appendChild(totalLi);
}

}
 
 Paris.render();


 let Lima = {
    location : 'Lima',
    min : 2,
    max : 16,
    avg : 4.6,
    salesPerHour: [],
    randomCustPerHour:[],
    totalPerHour : 0,
    workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

calculate : function(){
    for (let wh = 0; wh < this.workingHours.length; wh++ ){
    this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
},

 cookiesPerHour: function (){
     this.calculate();
for (let wh = 0 ; wh < this.workingHours.length;wh++){
this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
this.totalPerHour += this.salesPerHour[wh];}
},


    render: function () {
        this.cookiesPerHour();
        let divEl = document.getElementById('container');
        let h2El = document.createElement ('h2');
        h2El.textContent = (`${this.location}`);
         divEl.appendChild(h2El);
let ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
for ( let i = 0 ; i < this.workingHours.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
    ulEl.appendChild(liEl);
}
let totalLi = document.createElement('li')
totalLi.textContent = `total :${this.totalPerHour} Cookies`
ulEl.appendChild(totalLi);
}

}
 
 Lima.render();
