const compose = (functions) => {
    return function(x) {
        if(functions.length > 0) {
            for(let i = functions.length - 1; i >= 0; i--) {
                x = functions[i](x);
            }
            return x;
        } return x;
    }
}

const arrFn = [x => x + 1, x => x * x, x => 2 * x];
const fn = compose(arrFn);
fn(4);
// console.log(fn(4));