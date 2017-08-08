
function BobStore ( storeLocation, minCustomer, maxCustomer, avgCookies, id, openHours) {
    this.storeLocation = storeLocation,
    this.minCustomer = minCustomer,
    this.maxCustomer = maxCustomer, 
    this.avgCookies = avgCookies,
    this.id = id,
    this.cookiesPerHour = [],
    this.openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
}

BobStore.prototype.calculateCust = function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

BobStore.prototype.avgSalePerCustomer = function() {
    return this.calculateCust() * this.avgCookies;
}

//total sales per hr
BobStore.prototype.calcCookieData = function () {
    for (var i = 0; i < this.openHours.length; i++) {
        this.cookiesPerHour.push(Math.floor(this.avgSalePerCustomer()));
        }
    return this.cookiesPerHour;

}

BobStore.prototype.addToDom =  function () {
        var listAdd = document.getElementById( 'id' );

        this.calcCookieData();
        for (var i = 0; i < this.openHours.length; i++) {
            var cookieLi = document.createElement('li');
            cookieLi.innerHTML = (this.openHours[i] + this.cookiesPerHour[i] + ' cookies');
            listAdd.appendChild(cookieLi);
        }
    }

var pdxAirport = new BobStore('PDX Airport', 23, 65, 6.3)
var pioneerSquare = new BobStore('Pioneer Square', 3, 24, 1.2)
var powells = new BobStore('Powell\'s', 11, 38, 3.7)
var stJohns = new BobStore('St. John\'s', 20, 38, 3.7)
var waterfront = new BobStore('Waterfront', 2, 16, 4.6)

pdxAirport.storeLocation



// var openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

// var pdxAirport = {
//     location: 'PDX Airport',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookies: 6.3,
//     cookiesPerHour: [],
//     totalCookies: 0,

//     getTotal: function () {
//         for (var i = 0; i < openHours.length; i++) {
            
//             this.totalCookies += this.cookiesPerHour[i];
//         }
//     },

//     calculateCust: function () {
//         return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//     },

//     avgSalePerCustomer: function () {
//         return this.calculateCust() * this.avgCookies;
//     },

//     calcCookieData: function () { 
//         for (var i = 0; i < openHours.length; i++) {
//             this.cookiesPerHour.push(Math.floor(this.avgSalePerCustomer()));
//         }
//     },

//     addToDom: function () {
//         var listAdd = document.getElementById( 'pdxCookie' );

//         this.calcCookieData();
//         for (var i = 0; i < openHours.length; i++) {
//             var cookieLi = document.createElement('li');
//             cookieLi.innerHTML = (openHours[i] + this.cookiesPerHour[i] + ' cookies');
//             listAdd.appendChild(cookieLi);
//         }

//         this.getTotal();
//         var totalLi = document.createElement('li');
//         totalLi.innerText = ('Total Cookies: ' + this.totalCookies);
//         listAdd.appendChild(totalLi);
//     }
// }

// pdxAirport.addToDom();