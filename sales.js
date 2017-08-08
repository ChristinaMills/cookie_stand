
var pdxAirport = {
    location: 'PDX Airport',
    minCustomer: 23, 
    maxCustomer: 65,
    avgCookies: 6.3,
    temporaryArr: [],
    totalCookies: 0,

    getTotal: function() {
        for (var i = 0; i < 15; i++) {
            this.totalCookies += this.temporaryArr[i];
        }
    },
    
    calculate: function () {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer ) + this.minCustomer)
    },
    
    avgSalePerCustomer: function() {
        return this.calculate() * this.avgCookies;
    },
    
    cookieData: function(){
        for ( var i = 0; i < 14; i++ ) {
        this.temporaryArr.push(Math.floor(this.avgSalePerCustomer() ) );
        }
        return this.temporaryArr;
        
    },

    // dailyTotal: function (){
    //     this.temporaryArr.reduce(function(a, b) {return a +b});
    //     console.log(dailyTotal())
    // },
    
    addToDom: function () { 
        openHours= ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
        var listAdd = document.getElementById( 'pdxCookie' );
     
            for ( var i = 0; i <= 15; i++ ) {
                if (i < 15) {
                    var newList = document.createElement('li');
                    newList.innerHTML = (openHours[i] + this.cookieData()[i] + ' cookies');
                    listAdd.appendChild( newList );
                }
            
            else {
                    var newList = document.createElement('li');
                    this.getTotal();
                    newList.innerText = ('Total Cookies: ' + this.totalCookies) //this.getTotal())
                    listAdd.appendChild(newList);
                }    
            }
        
        
    },
}


pdxAirport.addToDom();





// var pdxAirport = {
//     location: 'PDX Airport',
//     minCustomer: 23, 
//     maxCustomer: 65,
//     avgSale: 6.3,
//     hourlyCustomers: function () {
//         return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer ) + this.minCustomer)
//     },
//     cookiesPerHour: [],

//     calculateCookies: function() {
//        for ( var i = 0; i < 15; i++ ) {
//        // console.log(this.hourlyCustomers())
//        // console.log(this.avgSale)    
//         this.cookiesPerHour.push(Math.floor(this.hourlyCustomers() * this.avgSale))
//        }

//     },
//     total: 0,

//     cookiesPerDay: function () {
//         for (var i = 0; i < 15; i ++) {
//             this.total += cookiesPerHour;
//         }
//         console.log(total);
//     },
    
   
//     // firstAdd: function sum(a,b){ 
//     //     var total = a + b;
//     //     return total
//     // },

//     // findTotal: function sumArray(cookiesPerHour){
//     // var addedUp = sum( sum(cookiesPerHour[0], [1])[0], testArray[2])[0]
//     // return addedUp;
//     // },
   
   

//     addToDom: function () { 
//         openHours= ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
//         var cookieList = document.getElementById( 'pdxCookie' );
//         console.log('container var is :' + cookieList)
//         this.calculateCookies();
//             for ( var i = 0; i < 15; i++ ) {
//                 if (i < 15) {
                    
//                     cookieList.innerHTML = (openHours[i] + this.cookiesPerHour[i] + ' cookies');
//                     cookieList.appendChild( cookieList );
//                 }
//                 else {
//             var newHourlyData = document.createElement( 'li' );
//             this.cookiesPerDay();
//             cookieList.innerText = ('Total Cookies: ' + this.cookiesPerDay);
//             cookieList.appendChild( cookieList );
//             }
            
    
    
//             }
//     }

// }


// pdxAirport.addToDom();


//  // totalHourlyCookies: function () {
//     //     return this.hourlyCustomers() * this.avgSale
//     // },

//     // locationCookieData: function(){
//     //     var tempArr = []
//     //     for ( var i = 0; i < 15; i++ ) {
//     //     tempArr.push(Math.floor(this.totalHourlyCookies()));
//     //     }
//     //     return tempArr;
//     // },
    
