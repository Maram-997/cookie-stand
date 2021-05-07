'use strict';


let workingHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let totalPerHour = [];
let cities = [];
let totalCookiesPerHour = [];
let intialDailyLoction =0;
let totalTotal =0;

function Cities(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesPerHour = [];
    this.randomCustPerHour = [];
    this.intialDailyLoction = intialDailyLoction;
    

    cities.push(this);
}

Cities.prototype.randomCX = function (min, max) {
    for (let wh = 0; wh < workingHours.length; wh++) {
        this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
}

Cities.prototype.sPerHour = function () {

    for (let r = 0; r < this.randomCustPerHour.length; r++) {
        this.salesPerHour.push(Math.ceil(this.randomCustPerHour[r] * this.avg));
        totalPerHour += this.salesPerHour[r];
    }

}
function header (){

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let thhour =document.createElement('th');
    trEl.appendChild(thhour);
    thhour.textContent =  ('Working Hours');

    for (let i = 0; i < workingHours.length; i++) {
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent =workingHours[i];
           
}
let dailyLoctionTotal = document.createElement('th')
trEl.appendChild(dailyLoctionTotal);
dailyLoctionTotal.textContent = ('Daily Loction Total');

}


let divEl = document.getElementById('container');
    let tableEl = document.createElement('table');
    divEl.appendChild(tableEl);



Cities.prototype.render = function () {

    let trEl2 = document.createElement ('tr');
    tableEl.appendChild(trEl2);
let tdLocation = document.createElement('td');
trEl2.appendChild(tdLocation);
tdLocation.textContent = this.location;
    
 
    

for (let rCx = 0; rCx < this.salesPerHour.length; rCx++) {
   
    this.intialDailyLoction += this.salesPerHour[rCx];
    
        let tdEl = document.createElement('td');
        trEl2.appendChild(tdEl);
        tdEl.textContent = (this.salesPerHour[rCx]);
       
     totalCookiesPerHour.push(this.salesPerHour[rCx]);  
 
}

    
    
   let tdE2 = document.createElement('td');
   trEl2.appendChild(tdE2);
   tdE2.textContent = this.intialDailyLoction

}


function total(){


    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdTotal =document.createElement('td');
   trEl.appendChild(tdTotal);
   tdTotal.textContent = 'Total';
  
for (let i = 0 ; i < workingHours.length; i++ ){
    let hTotal = 0 
    for (let j = 0; j <cities.length; j++) {
        hTotal += cities[j].salesPerHour[i]
        
    }
    let td = document.createElement('td');

    trEl.appendChild(td);
    td.textContent = hTotal
    

}
 for (let c = 0; c < totalCookiesPerHour.length ; c++) {
     
    totalTotal += totalCookiesPerHour[c]  
 }
 let thEl = document.createElement('th');
    trEl.appendChild(thEl);
 thEl.textContent =totalTotal;
}







let seatlle = new Cities('seatlle', 23, 65, 6.3);
let Tokyo = new Cities('Tokyo', 3, 24, 1.2);
let Dubai = new Cities('Dubai', 11, 38, 3.7);
let Paris = new Cities('Paris', 20, 38, 2.3);
let Lima = new Cities('Lima', 2, 16, 4.6);

header();

seatlle.randomCX();
seatlle.sPerHour();
seatlle.render();

Tokyo.randomCX();
Tokyo.sPerHour();
Tokyo.render();

Dubai.randomCX();
Dubai.sPerHour();
Dubai.render();

Paris.randomCX();
Paris.sPerHour();
Paris.render();

Lima.randomCX();
Lima.sPerHour();
Lima.render();

total();

let salmonCookiesForm = document.getElementById('salmonCookiesForm');
salmonCookiesForm.addEventListener('submit', AddCookies );
function AddCookies (event){
event.preventDefault();
let location = event.target.location.value;
let Theminimumnumber = event.target.Theminimumnumber.value;
let Themaximumnumber = event.target.Themaximumnumber.value;
let Theaveragenumberofcookies = event.target.Theaveragenumberofcookies.value;

 
let cities = new Cities(location, Theminimumnumber, Themaximumnumber, Theaveragenumberofcookies )

tableEl.removeChild(tableEl.lastElementChild);
cities.randomCX();
cities.sPerHour();
cities.render();

total();

}






// let seatlle = {
//     location : 'seatlle',
//     min : 23,
//     max : 65,
//     avg : 6.3,
//     salesPerHour: [],
//     randomCustPerHour:[],
//     totalPerHour : 0,
//     workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

// calculate : function(){
//     for (let wh = 0; wh < this.workingHours.length; wh++ ){
//     this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
// },

//  cookiesPerHour: function (){
//      this.calculate();
// for (let wh = 0 ; wh < this.workingHours.length;wh++){
// this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
// this.totalPerHour += this.salesPerHour[wh];}
// },


//     render: function () {
//         this.cookiesPerHour();
//         let divEl = document.getElementById('container');
//         let h2El = document.createElement ('h2');
//         h2El.textContent = (`${this.location}`);
//          divEl.appendChild(h2El);
// let ulEl = document.createElement('ul');
//      divEl.appendChild(ulEl);
// for ( let i = 0 ; i < this.workingHours.length; i++){
//     let liEl = document.createElement('li');
//     liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li')
// totalLi.textContent = `total :${this.totalPerHour} Cookies`
// ulEl.appendChild(totalLi);
// }

// }

//  seatlle.render();


//  let Tokyo = {
//     location : 'Tokyo',
//     min : 3,
//     max : 24,
//     avg : 1.2,
//     salesPerHour: [],
//     randomCustPerHour:[],
//     totalPerHour : 0,
//     workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

// calculate : function(){
//     for (let wh = 0; wh < this.workingHours.length; wh++ ){
//     this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
// },

//  cookiesPerHour: function (){
//      this.calculate();
// for (let wh = 0 ; wh < this.workingHours.length;wh++){
// this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
// this.totalPerHour += this.salesPerHour[wh];}
// },


//     render: function () {
//         this.cookiesPerHour();
//         let divEl = document.getElementById('container');
//         let h2El = document.createElement ('h2');
//         h2El.textContent = (`${this.location}`);
//          divEl.appendChild(h2El);
// let ulEl = document.createElement('ul');
//      divEl.appendChild(ulEl);
// for ( let i = 0 ; i < this.workingHours.length; i++){
//     let liEl = document.createElement('li');
//     liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li')
// totalLi.textContent = `total :${this.totalPerHour} Cookies`
// ulEl.appendChild(totalLi);
// }

// }

//  Tokyo.render();

//  let Dubai = {
//     location : 'Dubai',
//     min : 11,
//     max : 38,
//     avg : 3.7,
//     salesPerHour: [],
//     randomCustPerHour:[],
//     totalPerHour : 0,
//     workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

// calculate : function(){
//     for (let wh = 0; wh < this.workingHours.length; wh++ ){
//     this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
// },

//  cookiesPerHour: function (){
//      this.calculate();
// for (let wh = 0 ; wh < this.workingHours.length;wh++){
// this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
// this.totalPerHour += this.salesPerHour[wh];}
// },


//     render: function () {
//         this.cookiesPerHour();
//         let divEl = document.getElementById('container');
//         let h2El = document.createElement ('h2');
//         h2El.textContent = (`${this.location}`);
//          divEl.appendChild(h2El);
// let ulEl = document.createElement('ul');
//      divEl.appendChild(ulEl);
// for ( let i = 0 ; i < this.workingHours.length; i++){
//     let liEl = document.createElement('li');
//     liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li')
// totalLi.textContent = `total :${this.totalPerHour} Cookies`
// ulEl.appendChild(totalLi);
// }

// }

//  Dubai.render();

//  let Paris = {
//     location : 'Paris',
//     min : 20,
//     max : 38,
//     avg : 2.3,
//     salesPerHour: [],
//     randomCustPerHour:[],
//     totalPerHour : 0,
//     workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

// calculate : function(){
//     for (let wh = 0; wh < this.workingHours.length; wh++ ){
//     this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
// },

//  cookiesPerHour: function (){
//      this.calculate();
// for (let wh = 0 ; wh < this.workingHours.length;wh++){
// this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
// this.totalPerHour += this.salesPerHour[wh];}
// },


//     render: function () {
//         this.cookiesPerHour();
//         let divEl = document.getElementById('container');
//         let h2El = document.createElement ('h2');
//         h2El.textContent = (`${this.location}`);
//          divEl.appendChild(h2El);
// let ulEl = document.createElement('ul');
//      divEl.appendChild(ulEl);
// for ( let i = 0 ; i < this.workingHours.length; i++){
//     let liEl = document.createElement('li');
//     liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li')
// totalLi.textContent = `total :${this.totalPerHour} Cookies`
// ulEl.appendChild(totalLi);
// }

// }

//  Paris.render();


//  let Lima = {
//     location : 'Lima',
//     min : 2,
//     max : 16,
//     avg : 4.6,
//     salesPerHour: [],
//     randomCustPerHour:[],
//     totalPerHour : 0,
//     workingHours : ['6 am', '7 am','8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ],

// calculate : function(){
//     for (let wh = 0; wh < this.workingHours.length; wh++ ){
//     this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
// },

//  cookiesPerHour: function (){
//      this.calculate();
// for (let wh = 0 ; wh < this.workingHours.length;wh++){
// this.salesPerHour.push(Math.ceil(this.randomCustPerHour[wh] * this.avg));
// this.totalPerHour += this.salesPerHour[wh];}
// },


//     render: function () {
//         this.cookiesPerHour();
//         let divEl = document.getElementById('container');
//         let h2El = document.createElement ('h2');
//         h2El.textContent = (`${this.location}`);
//          divEl.appendChild(h2El);
// let ulEl = document.createElement('ul');
//      divEl.appendChild(ulEl);
// for ( let i = 0 ; i < this.workingHours.length; i++){
//     let liEl = document.createElement('li');
//     liEl.textContent = (` ${this.workingHours[i]}${this.salesPerHour[i]} cookies`);
//     ulEl.appendChild(liEl);
// }
// let totalLi = document.createElement('li')
// totalLi.textContent = `total :${this.totalPerHour} Cookies`
// ulEl.appendChild(totalLi);
// }

// }

//  Lima.render();
