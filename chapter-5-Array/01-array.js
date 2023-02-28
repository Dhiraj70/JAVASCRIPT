let marks_class_12 = [91, 82, 43, 65, null, "Not Present"];

console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);      // will be undefiend because index 6 does not exit.

marks_class_12[6] = 93;              // Adding  a new value to the array.

marks_class_12[0] = 93;              // Changing the value of an array

console.log(marks_class_12)
console.log(typeof marks_class_12)


console.log("The length of marks_class_12 is : ", marks_class_12.length);