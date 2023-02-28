// splice method

let num = [12, 34, 32, 2, 4, 5];
num.splice(1, 2, 1223, 4567, 8890,123445);

console.log(num)

let delected = num.splice(1, 2, 1223, 4567, 8890,123445);
console.log( typeof delected);