// 1. Create a variable of type string and add type of add a number to it.

//  chapter 1 - Q1

let a = "Dhiraj";
let b = 50;
console.log(a + b);

// 2. Use typeof operator to find the data type of the string in last question.

//  chapter 1 - Q2

console.log(typeof (a+b));

// 3. Create a const object in javascript can you change it to hold a number later.  = not change

//  chapter 1 - Q3

const aa = {
   name: "Dhiraj",
   section: 1,
   isprinciple: false
};
// aa = "Dhiraj";


// 4. Try to add a new key to the const object in problem 3. were you able to do it.

//  chapter 1 - Q4

const a1 = {
    name: "Dhiraj",
    section: 1,
    isprinciple: false, 
};
// a1 = {}                       // throw error
a1["friend"] = "kumar";          // another key and value add  in a1 obj.
a1["name"] = "suraj";
 console.log(a1);

// 5. Write a JS program to create a word-meaning dictinary of 5 words.

//  chapter 1 - Q5

const dic = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotinal disturbance and anxiety",
    yakka: "work, especially hard word",
};

console.log(dic['yakka']);