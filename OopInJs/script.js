"use strict";

const user = {
  firstName: "Sidhant",
  lastName: "Sisodiya",
  age: 22,

  getAgeYear: function () {
    return new Date().getFullYear() - user.age;
  },
};

// console.log(user.getAgeYear())

/*
this is example of closure property

function CreateUser(name) {
    let password = "124534431"

    return function() {
        console.log(name, password)
    }
}

const user1 = CreateUser("Sidhant")
user1();

*/

/* 
Factory Function 

function  newUser(firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getFullYear () {
            return new Date().getFullYear() - age
        }
    }

    return user;
}

const user1 = newUser("Sidhant", "Singh", 22);
const user2 = newUser("Kartik", "singh", 34)
console.log(user2.firstName)

*/

// Encapsulation
/*
function CreateUser(name) {
    let password = "124534431"

    return {
        getName : () => name,
        checkPassword : (input) => input === password 
    }
}
*/

// const user1 = CreateUser("Sidhant")
// console.log(user1.getName())
// console.log(user1.checkPassword("124534431"))
// console.log(user1.password)

// Object.prototype.display = function(){
//     console.log(this);
//     return Object.entries(this)
// }

// let obj = {
//     name : "Uttkarsh kesharwani",
//     age : 23
// }

// console.log(obj.display())

/* Polymorphism 

//  It allows the same function, method, or object to behave differently based on the context.

function getBirthYear() {
    return new Date().getFullYear() - this.age
}

function  newUser(firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getBirthYear
    }

    return user;
}


console.log(newUser("Sidhant", "singh", 22))

const user1 = newUser("Sidhant", "singh", 22)
console.log(user1.getBirthYear())

const user2 = newUser("Kartik", "singh", 34)
console.log(user2.getBirthYear())

*/

// function  newUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getBirthYear : newUser.commonMethod.getBirthYear
//     }

//     return user;
// }

// newUser.commonMethod = {
//      getBirthYear () {
//     return new Date().getFullYear() - this.age
// }
// }

// newUser.display = function () {
//     console.log(this)
// }

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName,
   this.lastName = lastName, 
   this.age = age;
}

CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

CreateUser.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}



const user1 = new CreateUser("Sidhant", "singh", 22);
// console.log(user1.getBirthYear());
// console.log(user1.getFullName())

const user2 = new CreateUser("Kartik", "singh", 34);
// console.log(user2.getBirthYear());
// console.log(user2.getFullName())

// function sayHi() {
//   console.log(this);
//   return "hiii";
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const sidhant = new Person("Sidhant", 23);
// console.log(sidhant);


// Factory Function in JavaScript?

const createEmploye = function (fullName, age) {
    return {
        name : fullName,
        age : age,
        greet () {
            return `Hi, i'm ${this.name}. and i'm ${this.age} years old.`
        } 
    }
}


const employe1 = new createEmploye("Sidhant", 22);
console.log(employe1) 
console.log(employe1.greet()) 