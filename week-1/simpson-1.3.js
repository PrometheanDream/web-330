var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program
console.log(header.display("William", "Simpson", "Assignment 1.3"));
console.log("\n");
console.log("-- DISPLAYING CELL PHONE DETAILS --");

function CellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice=function(){ // function pulls the this.price variable
        return "Price: " + this.price;
    }

    this.getModel=function(){ // function pulls the this.model variable
        return "Model: " + this.model;
    }

    this.getDetails=function(){ // pulls multiple variables as well as call the two previous functions.
        return "Manufacturer: " + this.manufacturer + "\n" + this.getPrice() + "\n" + this.getModel() + "\n" + "Color: " + this.color;
    }


};

var phone = new CellPhone("Samsung", "Galaxy S9", "Black", 1100);
console.log(phone.getDetails());







// end program