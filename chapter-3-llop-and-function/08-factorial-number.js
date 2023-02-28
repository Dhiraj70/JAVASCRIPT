let number = parseInt(prompt("Enter the positive number : "));
number = Number.parseInt(number);

if(number < 0){
    console.log("Error! The negative number is does not exit.")
}

else if(number === 0){
    console.log(`The factorial ${number} is 1.`)
}

else{
    let fact = 1;
    for(let i=1; i<=number; i++){
        fact *= i;
    }
    console.log(`The factorial ${number} is ${fact} : `)
}