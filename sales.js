
function Store(storeLocation, minCustomer, maxCustomer, avgCookies, id, openHours) {
    this.storeLocation = storeLocation,
        this.minCustomer = minCustomer,
        this.maxCustomer = maxCustomer,
        this.avgCookies = avgCookies,
        this.id = id,
        this.cookiesPerHour = [],
        this.dailyStoreTotal = 0,
        //this.allStoreTotal = 0,
        this.addToDom();
        
}


Store.prototype.calculateCust = function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

Store.prototype.avgSalePerCustomer = function () {
    return this.calculateCust() * this.avgCookies;
}

//total sales per hr (customersPerHr * amt of cookies per customer)
Store.prototype.calcCookiesPerHour = function () {
    for (var i = 0; i < 15; i++) {
        this.cookiesPerHour.push(Math.floor(this.avgSalePerCustomer()));
    }
    return this.cookiesPerHour;
}

Store.prototype.dailyStoreTotalCalc = function () {
    this.dailyStoreTotal = this.cookiesPerHour.reduce( function (a, b) { return a + b} );
}



Store.prototype.addToDom = function () {
    this.calcCookiesPerHour();
    var containerStore = document.getElementById("stores");
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', this.id);
    newRow.innerHTML = this.storeLocation;
    containerStore.appendChild(newRow);
    
    //populating the row with cookies per hr data
    var container = document.getElementById(this.id);
    for (var i = 0; i < 15; i++) {
        var newTableData = document.createElement('td');
        newTableData.innerText = this.cookiesPerHour[i]; //[i]
        container.appendChild(newTableData);
    }
    
    this.dailyStoreTotalCalc();
    var tdStoreTotal = document.createElement( 'td');
    tdStoreTotal.setAttribute('class', 'daily-total');
    tdStoreTotal.innerText = this.dailyStoreTotal;
    container.appendChild(tdStoreTotal);
}

function allStoreTotal () {
    var dailyTotalList = document.getElementsByClassName( 'daily-total');
    for ( var i = 0; i < 5; i++ ) {
        var dailyTotalIntegers = dailyTotalIntegers + dailyTotalList[i].innerHTML
    }
   console.log(dailyTotalIntegers);
}

    var pdxAirport = new Store('PDX Airport', 23, 65, 6.3, 'pdx-airport');
    var pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, 'pioneer-square');
    var powells = new Store('Powell\'s', 11, 38, 3.7, 'powell');
    var stJohns = new Store('St. John\'s', 20, 38, 3.7, 'st-johns');
    var waterfront = new Store('Waterfront', 2, 16, 4.6, 'waterfront');