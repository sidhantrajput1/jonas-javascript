const user = {
    firstName : "Sidhant",
    lastName : "Singh",
    tags : ['1', '2', '3', '4'],
    printTags () {
        this.tags.forEach(function(tags) {
            console.log(this)
        }, this)
    }
}

const user1 = user;
console.log(user1);


// constructor function

function Person(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    
    this.sayHello = function() {
        console.log(`Hi, ${this.firstName}.`)
    }
}

// Constructor Function : is a special type of function is used to create multiple same object with the same structor.

const person1 = new Person("Sidhant", "Singh", 22);
// console.log(person1.sayHello());
person1.sayHello();


// new Keyword  : it's return new empty object {}. 