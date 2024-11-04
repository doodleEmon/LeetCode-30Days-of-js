const filter = (arr, fn) => {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const greaterThan10 = (n) => {
    if (n > 10) {
        return n;
    } return false;
}

const firstIndex = (n, i) => {
    if (i === 0) {
        return n;
    } return false;
}

const plusOne = (n) => {
    if (n !== 0) {
        return n;
    } return false;
}

filter([-2,-1,0,1,2],plusOne)
// console.log("filter", filter([-2,-1,0,1,2],plusOne));