
console.log("Hey, this is the first line of code!")

setTimeout(function() {
    console.log("I am setTimeout Aync Function!")
})

console.log("Hey, this is the last line of code!")


/*
🧠 Behind the Scenes: How JavaScript Executes This
Answer : javascript is single thread language means it can do ont thing at a time in the call stack.

---  console.log("Hey, this is the first line of code!") 
this is line synchronous line. javaScript execute it immediatly.
so the first output will be
Hey, this is the first line of code!

move next line
setTimeout(function() {
    console.log("I am setTimeout Aync Function!")
})

setTimeOut is Asynchronous funtion. it is handle by the brower's web api not the call stack. Here the timeout is not decleare. it doesn't mean. it execute immediatly.

setTimeout(function() {
    console.log("I am setTimeout Aync Function!")
}, 0)
setTimeOut is Asynchronous funtion. it is handle by the brower's web api not the call stack. the function timeout is registered to be execute after 0 milisecond. but it doesn't run immediatly.

instead, it send to the web api. and then place in the callback queue (note : if function timeout is given like 5000, 100. after the specified delay , the callback function is placed into the Callback Queue.)

However, it will only be executed when the Call Stack is empty, and the Event Loop pushes it back into the stack.


-----------------------------------------------------------------------------------------------
setTimeout is an asynchronous function.

It is handled by the browser’s Web APIs, not by the Call Stack directly.

Since no delay is provided, it defaults to 0 milliseconds.

👉 But even with 0 ms, the function does not run immediately.

Instead:

The callback is sent to the Web API.

After the timer finishes (0 ms or 100 ms, 5000 ms, etc.), it is moved to the Callback Queue.

The Event Loop keeps checking: "Is the Call Stack empty?"

📝 Only when the Call Stack is empty, the Event Loop pushes the callback to be executed.
=--------------------------------=====-----------------==========================================

line 3 : 
    javaScript exeecution continues
    this line run immeditly because this is syncronous line
    so the second output will be 
        Hey, this is the last line of code!
    
-- Callback Queue + Event Loop
After all synchronous code is done, the event loop checks if the call stack is empty.

If yes, it pushes the timeout() callback from the callback queue to the call stack.

so 3rd output will be : 
    I am setTimeout Aync Function!
    
    
Hey, this is the first line of code!
Hey, this is the last line of code!
I am setTimeout Aync Function!

=== Code Execution Successful ===
*/



/* 


The Event Loop is a core concept in JavaScript that allows non-blocking, asynchronous code to run smoothly, even though JavaScript is a single-threaded language.
🔁 In Simple Words:

Imagine JavaScript is a chef in a kitchen 🧑‍🍳. He can only cook one dish at a time (single-threaded). But when he puts something in the oven (like a setTimeout()), he doesn’t just stand there waiting. Instead, he moves on to the next dish and checks back later when the oven is done.

This smart behavior is handled by the Event Loop.
🔧 How It Works:

    Call Stack: Where functions are executed. Only one function runs at a time.

    Web APIs / Browser APIs: These handle async things like setTimeout, fetch, or DOM events.

    Callback Queue (Task Queue): When an async task is done (like a timer or server response), its callback waits here.

    Event Loop:

        Constantly checks: "Is the Call Stack empty?"

        If YES → takes the first task from the Callback Queue and pushes it to the Call Stack to run.

*/