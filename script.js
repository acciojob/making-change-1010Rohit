const makeChange = (c) => {
  // Initialize the result object
  let result = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  // Calculate number of quarters
  result.q = Math.floor(c / 25);
  c = c % 25; // Update c to the remainder

  // Calculate number of dimes
  result.d = Math.floor(c / 10);
  c = c % 10; // Update c to the remainder

  // Calculate number of nickels
  result.n = Math.floor(c / 5);
  c = c % 5; // Update c to the remainder

  // The remainder is the number of pennies
  result.p = c;

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

