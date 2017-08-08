var openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var pdxAirport = {
    location: 'PDX Airport',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    cookiesPerHour: [],
    totalCookies: 0,
    hoursOpen: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],

    getTotal: function () {
        for (var i = 0; i < openHours.length; i++) {
            // this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
            this.totalCookies += this.cookiesPerHour[i];
        }
    },

    calculateCust: function () {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    },

    avgSalePerCustomer: function () {
        return this.calculateCust() * this.avgCookies;
    },

    calcCookieData: function () { // previously cookieData
        for (var i = 0; i < openHours.length; i++) {
            this.cookiesPerHour.push(Math.floor(this.avgSalePerCustomer()));
        }
    },

    addToDom: function () {
        // debugger; // will pause code in browser
        var listAdd = document.getElementById( 'pdxCookie' ); // use kabob-case for html ids (pdx-cookie)

        this.calcCookieData();
        for (var i = 0; i < openHours.length; i++) {
            var cookieLi = document.createElement('li');
            cookieLi.innerHTML = (openHours[i] + this.cookiesPerHour[i] + ' cookies');
            listAdd.appendChild(cookieLi);
        }

        this.getTotal();
        var totalLi = document.createElement('li');
        totalLi.innerText = ('Total Cookies: ' + this.totalCookies);
        listAdd.appendChild(totalLi);
    }
}

pdxAirport.addToDom();







// functions in an array?

function sayA () {
    console.log( 'aaaa' );
}

function sayB () {
    console.log( 'bbb' );
}

function sayC () {
    console.log( 'c' );
}

function sayD () {
    console.log( 'dddd' );
}

var functionsArr = [sayA,sayB,sayC,sayD];
functionsArr[0]();
functionsArr[2]();
functionsArr[3]();

var helperFunctions = {
    sayA: function () { 
        console.log( 'aaaaaa' );
    },
    sayB: function () {
        console.log( 'bbbbbb' );
    }
}

helperFunctions.sayB();