let arr = [23, 34, 45, 67, 12, 11];

let item = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index;
})

console.log(item)