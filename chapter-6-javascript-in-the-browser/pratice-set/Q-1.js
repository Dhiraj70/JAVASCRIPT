// Q-1. write a program using prompt function to take input of age as a value from the user
// and use alert to tell him if he can dirve

let age = prompt("Enter your age");
age = Number.parseInt(age);
let runAgain = true;
while(runAgain) {

    const canDrive = (age) => {
       return age>=18?true:false;
}
if(canDrive(age)) {
        alert("Yes you can drive");
}
else{
        alert("You can't drive")
}
runAgain = confirm("Do you want to play again")
}

