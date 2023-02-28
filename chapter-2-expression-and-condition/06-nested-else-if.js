let a = prompt("Hey whats your age : ");

a = Number.parseInt(a);

if(a<0){
    alert("This is a Invailed age.");
}
else if(a<9){
    alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("You can now drive as you above 18.");
}