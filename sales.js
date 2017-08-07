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
    },

    addToDom: function () { 
        openHours= ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
        var cookieList = document.getElementById( 'pdxCookie' );
        console.log('container var is :' + cookieList)
            for ( var i = 0; i < 15; i++ ) {
            var newHourlyData = document.createElement( 'li' );
            newHourlyData.innerHTML = (openHours[i] + (this.locationCookieData()[i]) + ' cookies') ;
            cookieList.appendChild( newHourlyData );
            }
        }
    };


pdxAirport.addToDom();




