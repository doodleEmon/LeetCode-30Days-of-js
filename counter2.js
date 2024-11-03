const createCounter = (init) => {
    const initial = init;
    return {
        increment: function(){
            return ++init;
        },
        decrement: function(){
            return --init;
        },
        reset: function(){
            return init=initial;
        },
    }
}

const counter = createCounter(5);
counter.increment();
counter.reset();
counter.decrement();

// console.log("🚀 ~ counter:", counter.increment())
// console.log("🚀 ~ counter:", counter.increment())
// console.log("🚀 ~ counter:", counter.decrement())
// console.log("🚀 ~ counter:", counter.reset())
// console.log("🚀 ~ counter:", counter.reset())
