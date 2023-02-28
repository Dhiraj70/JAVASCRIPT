console.log("helo i am dhiraj kuamr")

alert("Enter the value !")
a = prompt("Enter a is here", "456")
a = Number.parseInt(a)
alert("your entered a of type " + (typeof a))

let write = confirm("Do you want to write it to the page");

if(write) {
    document.write(a)
}

else{
    document.write("Please allow me to write")
}

// document.write(a)
