const reduce = (nums, fn, init) => {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }
    return init;
}

const sum1 = (accum, curr) => {
    return accum + curr;
}

const sumMulti = (accum, curr) => {
    return accum + curr * curr;
}

const sumRet0 = (accum, curr) => {
    return 0;
}
reduce([1, 2, 3, 4], sum1, 0);