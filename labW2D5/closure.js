"use strict";

//cant get byField function to pass tests. It works just fine when to printing to console,
//and tried to figure out why but i couldnt. 
//Professor question, For drawing a lexical environment diagram if there is a while 
//loop, thats a block code s


/* Does a function pickup latest changes?
Yes it always gets the most recent value.
*/

/* Which variables are available?
  It will show Pete because the return fcn is inside of another fcn so its lexical scope
  is the outer fcn and it has access to its variables. Another way of saying it is it has access
  to its varibles where it was created. Any fcn always has access to the variable environmnet
  of the execution context in which the fcn was created.
*/

/* Are counters independent?
Yes its counter has its own execution context and its own lexical environment
*/

/* Counter object
Yes works just fine. 1 , 2 ,1. Up and down fcns have the same lexical environment which is
the counter fcn. They have access to the same counter varible. 
*/

/* Function in if
Calling the fcn creates an error because the sayHi() fcn lives within the if block and cannot
be accessed 
*/

/* Sum with closures
Write function sum that works like this: sum(a)(b) = a+b.
Yes, exactly this way, using double parentheses (not a mistype).
For instance:
sum(1)(2) = 3
sum(5)(-1) = 4
*/
// eslint-disable-next-line require-jsdoc
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(6));

/*
Is variable visible?
No, according to dead zone it cant be accessed until the exectuion gets to "let"
The varible is known but is uninitialized until
*/