
function BobStore ( location, minCustomer, maxCustomer, avgCookies, id, openHours) {
    this.storeLocation = storeLocation,
    this.minCustomer = minCustomer,
    this.maxCustomer = maxCustomer, 
    this.avgCookies = avgCookies,
    this.id = id,
    this.cookiesPerHour = [],
    this.totalCookies = totalCookies,
    openHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
}

BobStore.prototype.calculateCust = function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

BobStore.prototype.avgSalePerCustomer = function() {
    return this.calculateCust() * this.avgCookies;
}

BobStore.prototype.calcCookieData = function () {
    for (var i = 0; i < openHours.length; i++) {
            this.cookiesPerHour.push(Math.floor(this.avgSalePerCustomer()));
        }
}

BobStore.prototype.addToDom =  function () {
        var listAdd = document.getElementById( 'id?' );

        this.calcCookieData();
        for (var i = 0; i < openHours.length; i++) {
            var cookieLi? = document.createElement('li');
            cookieLi?.innerHTML = (openHours[i] + this.cookiesPerHour[i] + ' cookies');
            listAdd.appendChild(cookieLi);
        }

        
    }

// total:this.getTotal();
//         var totalLi = document.createElement('li');
//         totalLi.innerText = ('Total Cookies: ' + this.totalCookies);
//         listAdd.appendChild(totalLi);
// function Animal (par1, par2, par3) { // the methods are not added as properties
//     this.name = name;
//     this.species = species;
//     this.food = food;
// }
// // the methods are not added as properties
// var whateverAnimal = new Animal( 'sophie', 'zebra', )

// Animal.prototype.askForFood = function () {
//     alert( do shit)
// }

// Animal.prototype.addToDom = function () {
//     var list = document.getElementById(' ')
//     var newWhateverLi = document.createElement('li')
//     newWheberLi.innerText = this.name;
//     list.appendChild(listItem)
// }


/////////////////////////////////