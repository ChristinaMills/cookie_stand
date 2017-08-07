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
    }
};


