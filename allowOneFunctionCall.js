const once = (fn) => {
    let isCalled = false;
    console.log("🚀 ~ ...args:", ...args)
    return function (...args) {   // this function is mainly the "onceFn" (wrapper) function
        if (isCalled) {
            return undefined;
        }
        isCalled = true;
        return fn(...args);
    };
}

const fn1 = (a, b, c) => {
    return a + b + c;
}

const onceFn = once(fn1); // here, "onceFn" is storing the returned value of "once" function
onceFn(1, 2, 3);   // which value is returned from "once" function that is taking 1, 2, 3 as arguments
onceFn(4, 5, 6);
// console.log(onceFn(1, 2, 3));
// console.log(onceFn(4, 5, 6));