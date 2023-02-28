// sort method

let compare = (a, b) => {
    return a - b;
}
let num = [12, 34, 32, 53, 23, 22, -11, 5]
num.sort(compare);
console.log(num);