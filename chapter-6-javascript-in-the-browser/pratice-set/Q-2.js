// Q-2. In q-1 use confirm to ask the user if he wants to see the prompt again

let runAgain = true;
const candrive = (age) => {
    return age >= 18 ? true : false
}

while (runAgain) {

    let age = prompt("Enter your age : ");
    age = Number.parseInt(age)

    if (candrive(age)) {
        alert("yes you can drive")
    }
    else {
        alert("you can't drive")
    }
    runAgain = confirm("Do you want to play again");
}