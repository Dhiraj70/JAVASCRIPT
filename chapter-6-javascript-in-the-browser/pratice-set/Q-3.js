// Q-3. In The privious question use console.error to log the error if the age entered is 
// negative

let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

while (runAgain) {

    let age = prompt("Enter your age : ");
    age = Number.parseInt(age);

    if (age < 0) {
        console.error("plaese enter a valid age");
        break;
    }

    if (canDrive(age)) {
        alert("yes you can Drive");
    }
    else {
        alert("You can't drive")
    }
    runAgain = confirm("Do you want to play agian")
}
