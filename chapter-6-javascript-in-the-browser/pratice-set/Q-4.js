// Q-4  write a program to change the url to google.com (Redirection) if user enters a number 
//      greater than 4.

let number = prompt("Enter your number");

number = Number.parseInt(number);

if(number > 4) {
    location.href = "https://google.com"
}

