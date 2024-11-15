const sum = (a, b) => {
    return a+b;
}

const memoize = (fn) => {
    let cache = {};
    return function(...args) {
        let n = JSON.stringify(args);  // n = "[2,3]"
        if(n in cache) {
            return cache[n];  // return the value of "[2,3]" which is 5 from the cache object
        }else {
            let result = fn.apply(this, args);  // as args is an array, then every value should be separately enter into the function fn.
            cache[n] = result;  // "[2,3]": 5
            return result;
        }
    }
}

const memoizedSum = memoize(sum);
memoizedSum(2, 3);
memoizedSum(2, 3);
