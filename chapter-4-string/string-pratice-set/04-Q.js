let str = "please give Rs 1000";

// let amount = str.slice("please give Rs ".length)

let amount = Number.parseInt(str.slice(15))
console.log(amount)
console.log(typeof amount)