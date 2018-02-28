var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
console.log(header.display("William", "Simpson", "Assignment 2.2"));
console.log("\n");

var person = {
    getAge: function(){
        return this.age;
    }


};

var william = Object.create(person, {
    "age":
    {
        "value":"24"
    },
    "fullname":
    {
        "value": "William Simpson"
    }

});

william.getAge();

console.log("The person's full name is " + william.fullname);
console.log("The person's age is " + william.age);


// end program


