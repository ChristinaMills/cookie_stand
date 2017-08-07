var pdxAirport = {
    location: 'PDX Airport',
    minCustomer: 23, 
    maxCustomer: 65,
    avgSale: 6.3,
    hourlyCustomers: function () {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer ) + this.minCustomer)
    },
    totalHourlyCookies: function () {
        return this.hourlyCustomers() * this.avgSale
    },
    locationCookieData: function(){
        var tempArr = []
        for ( var i = 0; i < 15; i++ ) {
       tempArr.push(Math.floor(this.totalHourlyCookies()));
        }
    return tempArr;
    }

    addToDom: function () { 
        var cookieList = document.getElementById

    }
};


openHours= ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ']


