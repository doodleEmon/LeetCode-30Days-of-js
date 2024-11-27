function cancellable(fn, args, t) {
    let timeoutId; // Holds the ID of the scheduled execution
  
    // Schedule the execution of the function after 't' milliseconds
    timeoutId = setTimeout(() => {
      const result = fn(...args);
      console.log({ time: t, returned: result }); // Log the output as specified
    }, t);
  
    // Return a cancel function to clear the timeout
    return function cancelFn() {
      clearTimeout(timeoutId);
      console.log([]); // If canceled, log an empty array as per the example
    };
  }
  
  // Example 1
  console.log("Example 1:");
  const fn1 = (x) => x * 5;
  const cancelFn1 = cancellable(fn1, [2], 20);
  setTimeout(cancelFn1, 50); // Cancel after 50ms (after fn is executed)
  
  // Example 2
  setTimeout(() => {
    console.log("\nExample 2:");
    const fn2 = (x) => x ** 2;
    const cancelFn2 = cancellable(fn2, [2], 100);
    setTimeout(cancelFn2, 50); // Cancel after 50ms (before fn is executed)
  }, 100);
  
  // Example 3
  setTimeout(() => {
    console.log("\nExample 3:");
    const fn3 = (x1, x2) => x1 * x2;
    const cancelFn3 = cancellable(fn3, [2, 4], 30);
    setTimeout(cancelFn3, 100); // Cancel after 100ms (after fn is executed)
  }, 200);
  