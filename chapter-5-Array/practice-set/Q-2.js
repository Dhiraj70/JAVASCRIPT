// 2. keep adding numbers to the array in 1. unit 0 is added to the array

let arr = []
let a;

do{
    a = prompt("Enter the number");
    a = Number.parseInt(a)
    arr.push(a)
}while(a != 0);

console.log(arr)