const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

const addTwoPromises = async (promise1, promise2) => {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    const sum = val1 + val2;
    return sum;
};

addTwoPromises(promise1, promise2).then((result) => {
    console.log(result)
})