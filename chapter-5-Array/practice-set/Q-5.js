// 5. use reduce of calculate factorial of a given number from an array of first n natural
// number ( n being the number whose factoral needs to be calculeted)

let arr = [2, 3, 4]

let n = arr.reduce((x1, x2) => {
    return x1 * x2;
})

console.log(n)