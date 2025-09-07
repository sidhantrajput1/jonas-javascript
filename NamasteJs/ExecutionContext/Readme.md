
Lectue 1

Execution Context 
    execution context is the enviroment where javascript code runs

Whenever JavaScript runs a piece of code, it creates an execution context to keep track of all variables, functions, and what’s currently happening.

it has two type of component

    1. Memory Component (Variable Environment) : This is like a box where JavaScript stores all variables and functions before the code starts running.

        - A storage area where names of variables/functions are kept, with their values initially set to undefined.

        - During creation phase (first pass):

            All variables are hoisted (lifted up)
            Functions are fully stored
            Variables get undefined

            ex - 
            var name = "Sidhant";
            function greet() { ... }

            in memory
            name → undefined
            greet → function reference


    2. Code Component  (Thread of Execution) : This is where JavaScript runs your code line by line, after memory is set up.

    What it does:
        Assigns values to variables
        Executes functions
        Runs logic (if, for, etc.)

JavaScript is a Synchronous single threaded language


Lecture 2

this refers to the window object. window is global object which is created along with global execution context

what is Global Object ?
    The Global Object is the top-level object in JavaScript that holds everything globally accessible.

    whenever you create any variable and function over here in global space 


Function Invocation and variable environment 

    call stack maintains the order of execution of execution context.


Hoisting is JavaScript's behavior of moving declarations (not values) to the top of the current scope before code runs

