# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
//takes a function and an amount of time as parameters.

setTimeout (function(){
    console.log('Hello');
}, 3000); //time in ms


```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
//repeats

//setting a const like this will automatically begin this type of timer and it will be happening.
const myTimer = setInterval(function(){
    console.log('here');
}, 2000);

//to stop it from running
clearInterval(myTimer);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


