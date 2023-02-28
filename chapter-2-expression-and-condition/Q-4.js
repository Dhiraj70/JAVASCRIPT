let num = 21;   //prompt("What is your number");
num = Number.parseInt(num);

if(num % 2 == 0){
    console.log("Your number is divisible is by 2");
}
else if(num % 3 == 0){
    console.log("your number is  divisible by 3");
}
else{
    console.log("Your number is not divisible by 2 and 3")
}