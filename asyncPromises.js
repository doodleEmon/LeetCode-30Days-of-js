var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let res = Array(functions.length);
    let waitFor = functions.length;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          res[i] = result;
          waitFor--;
          if (waitFor === 0) resolve(res);
        })
        .catch(reject);
    }
  });
};

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]);
promise.then(console.log); // [4,10,16]
