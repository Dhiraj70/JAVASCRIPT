let arr = [2,3,4,5,6,7,8,9,12,14]

let n = arr.filter((x) => {
    return x%2 == 0;
})

console.log(n)