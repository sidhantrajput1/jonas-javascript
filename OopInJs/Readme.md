OOP : Object Orientend Programming is a style based on the concept of 'OBJECT' that contain data(properties) and mehtod(code) to operate on that data. 
-----------------------------------------------------------
-----------------------------------------------------------

Class : A Class is template or blueprint to create object with the same structure and behavior.

Real life Example : 
    1. Imagine you want to build a new house
    2. First, you make a map/template of the house - this is the class
    3. Then you build many house with the same structure - this is called object.

Object :An object is an instance of a class.

Class : House Blueprint (just the design, no real house yet)
Object : A real house made using that design

-----------------------------------------------------------
-----------------------------------------------------------
Encapsulation  : Encapsulation  means hiding the external details of an object and exposing only what is neccessary. it helps protect the internal state behivor of an object from unwatend to change.

ex :
 You use a TV remote (public interface), but you don’t need to know the circuit inside (private details).

--------------------------------------------------------------
Abstaction =: Abstaction means showing only neccessary details to the user and hiding the complex background logic:

ex : 
    📱 You use a mobile phone to make calls, but you don’t know what’s happening inside the phone's hardware and software. That hidden complexity is abstraction.
----------------------------------------------------------

Polymorphism : It allow the same function, object to behave differently based on the context.

---------------------------------------------------------------------------------------------------------------------
What is a Factory Function in JavaScript?
Answer : A factory function is simply function that return a new object. it acts like a "factory". it create and return new customized object


1. Constructor Function

    A constructor function is a special function used to create many objects with the same structure (like a template).

2. new Keyword

    The new keyword does 3 things:

    - Creates a new empty object: {}
    - Sets this inside the function to point to that new object
    - Returns the new object with all the properties added


The constructor() is a special method that is automatically called when a new object is created using the class.