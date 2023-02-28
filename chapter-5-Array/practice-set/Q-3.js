// 3. filter for number deivisible by 10 from a given array

let arr = [100, 30, 1,2,4,50,70];

let n = arr.filter((x) => {
    return x%10 == 0;
})

console.log(n)

