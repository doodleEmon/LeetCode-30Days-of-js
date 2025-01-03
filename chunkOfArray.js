var chunk = function (arr, size) {
  let newArr = [];
  const loopLength = Math.ceil(arr.length / size);
  for (let i = 1; i <= loopLength; i++) {
    let tempArr = a.splice(0, size);
    newArr.push(tempArr);
  }
  return newArr;
};
