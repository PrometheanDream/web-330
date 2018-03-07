var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
console.log(header.display("William", "Simpson", "Assignment 3.2"));
console.log("\n");

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties) { // sets the default values
    this.username = properties.username || "billy";
    this.password = properties.password || "password";
    this.server = properties.server || "localhost:8080";
    this.version = properties.version || 1.0
}

function Informix(properties) { 
    this.username = properties.username || "all";
    this.password = properties.password || "powerful";
    this.server = properties.server || "localhost:1234";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }

    if (properties.databaseType === "Oracle"){
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === "Informix"){
        this.databaseClass = Informix;
    }
    

    return new this.databaseClass(properties);
};


var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: '<username>',
    password: '<password>'

});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: '<username>',
    password: '<password>'

});


console.log(oracle);
console.log(informix);




// end program


