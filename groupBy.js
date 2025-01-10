Array.prototype.groupBy = function (fn) {
  let obj = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (obj[key] == undefined) {
      obj[key] = [this[i]]; // creating key value pair
    } else {
      obj[key].push(this[i]); // pushing data into existing array
    }
  }
  return obj;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fn = function (item) {
  return item.id;
};

const result = arr.groupBy(fn);
console.log(result);
