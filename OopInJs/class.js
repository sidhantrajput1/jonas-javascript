/*
class CreateUser {
    #age
    constructor(fullName, lastName, age) {
        this.fullName = fullName,
        this.lastName = lastName,
        this.#age = age
    }

    // #hi = "hello world"
     static hi = "hello world"

    get FullName() {
        // console.log(this.#hi)
        return `${this.fullName} ${this.lastName}`
    }

    getBirthYear() {
       return  `${this.fullName} BirthYear is ${new Date().getFullYear() - this.#age}`
    }
}

CreateUser.prototype.greet = function() {
    return `Hey ${this.fullName}, Good Morning`
}

const user1 = new CreateUser("Sidhant", "Singh", 21);
console.log(user1)
console.log(user1.FullName)
console.log(user1.getBirthYear())
console.log(user1.greet())


const user = {
    firstName : "Sidhant",
    lastName : "Sisodiya",
    // getter in js
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName (value) {
        const [firstName, lastName] = value.split(" ");
        this.firstName = firstName,
        this.lastName = lastName
    }
}

console.log(user.fullName)

user.fullName = "Kartik Rajput"
console.log(user.fullName)

 */

// class User {
//     #age 
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.#age = age;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     set fullName(value) {
//         const [firstName, lastName] = value.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const user1 = new User("Sidhant", "Singh", 22)
// // user1.fullName = "Kartik Singh"

// class Student extends User {
//     constructor(firstName, lastName, age, standard, rollNo) {
//         // super() is used inside a child class to call the parent class’s constructor.
//         super(firstName, lastName, age)
//         this.standard = standard,
//         this.rollNo = rollNo
//     }
// }

// const student1 = new Student("Rohit" ,"Raj", 23, "BCA", 101)


'use strict'

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    
    set fullName(value) {
      const [firstName, lastName] = value.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
}

const person1 = new Person("Sidhant", "Sisodiya", 22);
console.log(person1);

class Student extends Person {
    #rollNo
    constructor(firstName, lastName, age, schoolName, rollNo) {
        super(firstName, lastName, age);
        this.schoolName = schoolName;
        this.#rollNo = rollNo;
    }
    
    get studentDetails () {
        return `Hi, I'm ${this.firstName} ${this.lastName}. My school name is ${this.schoolName}. My rollNo is ${this.#rollNo}.`;
    }
}

const student1 = new Student("Kartik", "Sisodiya", 21, "Galgotias University", 22131010291)
console.log(student1)

class Employee extends Student {
    constructor(firstName, lastName, age, schoolName, rollNo, companyName, companyCity) {
        super(firstName, lastName, age, schoolName, rollNo);
        this.companyName = companyName;
        this.companyCity = companyCity;
    }
    
    get employeeDetails() {
        return `Hi, I'm ${this.firstName} ${this.lastName}. I studied at ${this.schoolName}. Currently, I am working at ${this.companyName} in ${this.companyCity}.`;
    }
}
 

const employee1 = new Employee("Sidhant", "Sisodiya", 21, "Galgotias University", 22131010291, "juspay", "Noida")

console.log(employee1)
console.log(employee1.employeeDetails)