// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myStr = "hello";
const sayHello = function() {
  console.log(myStr);
}
sayHello();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counterVar = 0;
  return function() {
    counterVar++;
    return counterVar;
  }
};

const abc = counter();
console.log(abc());
console.log(abc());

const bcd = counter();
console.log(bcd());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counterVar = 0;
  const obj = {
    increment: function() {
      counterVar++;
      console.log(counterVar);
    },
    decrement: function() {
      counterVar--;
      console.log(counterVar);
    }
  };
  return obj;
};

console.log("counterFactory test");
const abcd = counterFactory();
abcd.increment();
abcd.increment();
abcd.increment();
abcd.decrement();
abcd.increment();

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

