const map = (arr, fn) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(fn(arr[i], i));
    }
    return temp;
}

const plusone = (n) => {
    return n + 1;
}

const plusI = (n, i) => {
    return n + i;
}

const constant = () => {
    return 42;
}

map([1, 2, 3], plusone);