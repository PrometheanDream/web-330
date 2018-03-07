var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
console.log(header.display("William", "Simpson", "Assignment 3.3"));
console.log("\n");

var DatabaseSingleton = (function() { // create a new object and store it in postgresDatabase
        var instance;
        function createInstance() {
            var postgresDatabase = new Object("Database instance initialized!");
            return postgresDatabase;
    }

    return {
        getInstance: function() { // function checks whether or not the instance exists, then creates if not, and if it does, returns current value.
            if (!instance) {
                instance = createInstance();
            }
            return instance;
         }
    }
})();

function databaseSingletonTest() // test will initilize two Singletons, and the log checks if the oracle and postgres are the same, which results in "true"
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("Same database instance? %s ", oracle === postgres);
}

databaseSingletonTest();

// end program