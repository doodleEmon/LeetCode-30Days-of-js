var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                reject('Time Limit Exceeded')
            }, t)
            return fn(...args).then(resolve).catch(reject)
        })
    }
};