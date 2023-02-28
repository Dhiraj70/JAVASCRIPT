// program add to first n natural number

let sum = 0;
let n = 35//prompt("Enter the value of n : ");
n = Number.parseInt(n);

for(let i = 0; i < n; i++){
    sum += (i + 1)
//    console.log((i+1), '+');
}
console.log("Sum of first " + n + " Natural number", + sum);