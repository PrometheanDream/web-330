var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
console.log(header.display("William", "Simpson", "Assignment 1.4"));
console.log("\n");

function Car(model){ // initial function for the car, contains its prototype function as well.
    this.model = model;
}
Car.prototype.start = function(){
    console.log("Car added to the racetrack!")
};

function Truck(model,year){ // initial function for the truck, has two arguments and contrains its prototype function.
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!")

};

function Jeep(model,year,color){ // the jeep function takes 3 arguments.
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function(){
     console.log("Jeep added to the racetrack!")
};

var racetrack = []; // the open array that the items will be pushed into.

function DriveIt(vehicle){ // function that adds the vehicles into the racetrack array when called.
    vehicle.start();
    racetrack.push(vehicle);
}

var nissan = new Car("Nissan 350z");
var toyota = new Truck("T100", 1988);
var jeep = new Jeep("CJ5", 1975, "Black")

DriveIt(nissan); // calling the 3 vehicles.
DriveIt(toyota);
DriveIt(jeep);

console.log("\n-- The following vehicles have been added to the racetrack! --");
for (var i = 0; i < racetrack.length; i++) { // iterates through the racetrack array, and then prints out what has been added.
 console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}

// end program


