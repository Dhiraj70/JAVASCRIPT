let marks = {
    rahul: 90,
    sohan: 95,
    kumar: 80,
    mohit: 76,
    laddu: 77,
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}