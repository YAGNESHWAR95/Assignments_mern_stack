// Assignment 01
// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

 const temp  = [32, 35, 28, 40, 38, 30, 42];
    // let res = temp.filter((ele)=>ele>35)
    // console.log(res);

    let res1 = temp.map((ele)=>
         ele+273
)
    console.log(res1)

    let res2 = temp.reduce((sum , ele)=>
        sum + ele,0)/temp.length
        console.log(res2)

    let res3 = temp.find((ele)=>ele >40);
    console.log(res3)

    let res4 = temp.findIndex((ele)=>ele === 28)
    console.log(res4)

    -------------------------------------------------------------------------------------------

Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"



const courses = ["javascript", "react", "node", "mongodb", "express"];
    let res1 = courses.filter((ele)=> ele.length >5)
    console.log(res1)

    let res2  = courses.map((ele)=>ele.toUpperCase())
    console.log(res2)

    let res3 = courses.reduce((con , ele) => con + ele)
    console.log(res3)

    let res4 = courses.find((ele) => ele === "react")
    console.log(res4)

    -------------------------------------------------------------------------------------------
    
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92


const marks = [78, 92, 35, 88, 40, 67];

let res1 = marks.filter((ele)=> ele>=40)
console.log(res1)

let res2 = marks.map((ele) => ele-5)
console.log(res2)

let res3 = marks.reduce((acc , ele)=> acc>ele? acc :ele)
console.log(res3)
/

// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
    
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"ASSIGNMENT 1:



const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let res1 = cart.filter((ele)=>ele.inStock)
console.log(res1)

let res2 = cart.map(ele=>({
  name : ele.name,
  totalPrice : ele.price * ele.quantity
   }));

console.log(res2)

let res3 = cart.reduce((acc ,ele)=>acc + ele.price,0)
console.log(res3)

let res4 = cart.find((ele)=>ele.name === "Mouse")
console.log(res4)


const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("Keyboard Index:", keyboardIndex);

-
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D

   
// reduce() to calculate average marks
// find() the student who scored 92
// findIndex() of student "Kiran"
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D

   
// reduce() to calculate average marks
// find() the student who scored 92
// findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let passedStudents = students.filter((stuObj) => stuObj.marks>=40)
console.log(passedStudents);

let grade = students.map(stuObj => {
  let g;
  if (stuObj.marks >= 90) g = "A";
  else if (stuObj.marks >= 75) g = "B";
  else if (stuObj.marks >= 60) g = "C";
  else g = "D";

  return { ...stuObj, grade: g };  // spread original + new grade
});

console.log(grade);

let avgMarks = students.reduce((acc,ele) => ele.marks+acc,0)
console.log(avgMarks)

let topper = students.find((ele)=> ele.marks === 92 )
console.log(topper)

let findKiran = students.findIndex((ele)=>ele.name ==="Kiran")
console.log(findKiran)