// let emp={
//     no:2,
//     name :'ammu'
// }
// emp.city="hyderabad"
// console.log(emp)
// delete(emp.name)
// console.log(emp)


// emp.eno=123;
// emp.mobile=12457;
// console.log(emp)



// //read keys
// emp.dtr=6;
// console.log(emp)
// console.log(Object.keys(emp))
// console.log(Object.values(emp))

//-------------------------------------------------------------------------------------------

// //unpacking
// let test={
//     a:10,
//     b:15,
//     c:20
// }
// let {a,c}=test;
// console.log(a)
// console.log(c)


// //complex object
// let student={
//     sno:123,
//     nname:'ammu',
//     marks:[46,49,48],
//     address:{
//         city:"Hyd",
//         pincode:5612
//     },
//     getData:function(){
//         console.log("hii")
// //     }
// // }
// // console.log(student.marks)
// // console.log(student.address.city)
// // console.log(student.city)
// // console.log(student.getData())

// // const user = {
// //   id: 101,
// //   name: "Ravi",
// //   email: "ravi@gmail.com",
// //   role: "student",
// //   isActive: true
// // };

// // user.lastLogin = "2026-01-01"
// // console.log(user.lastLogin)
// // user.role = "admin"
// // console.log(user.role)
// // delete (user.isActive)

// // console.log(Object.keys(user))
// // Test data:
// // const marks = {
// //   maths: 78,
// //   physics: 65,
// //   chemistry: 82,
// //   english: 55,
// // };
// // function getAverage(a){
// //       let sum =0;
// //       for(let i of Object.values(a)){
// //         sum+=i;
// //       }
// //       let count = Object.keys(marks).length;
// //       return sum/count;
// // }

// // let max = (b)=>{
// //     for(let i of Object.values(a)){
// //         sum+=i;
// //       } 
// // }
// //  marks.computer = 90;
// // let avg = getAverage(marks);
// // console.log(marks.length); 
// //-------------------------------------------------------------------------------------------
// // call back function is a function which can be passed argument to another function


// // function test1(a){
// //     console.log(a())
// // }

// // // here, anynomus function is callback function
// // test1(function(){
// //     return 123;
// // })

// // //-------------------------------------------------------------------------------------------

// // function hello1(){

// // }

// // function hello2(){

// // }

// //-------------------------------------------------------------------------------------------

// let skills=['html','css','javascript']

// let [skill1,skill2,skill3] = skills

// console.log(skills)

// // inserting at start
// // skills.unshift('angular','java')
// // console.log(skills)

// // //at end
// // skills.push('python')
// // console.log(skills)

// // //in between
// skills.splice(1,1,'script')
// console.log(skills)

// //-------------------------------------------------------------------------------------------

// // deleting the elements 
// //at start
// skills.shift()
// console.log(skills)

// // at end
// skills .pop()
// console.log(skills)

// // in between
// skills.splice(0,1)
// console.log(skills)

//-------------------------------------------------------------------------------------------

//filter(selection)
//method :  fileter
// let marks=[98,70,40,89,56]
// // let res = marks.filter(function(i){
// //     return i<20
// // })
// // console.log(res);
// //------------------------------------------------------------------------------------------
//  // write a function that can extract marks greater than 70 and packed them i array

//  function filtering(a,b){
//     let arr = []
//     for(let i of a){
//         if(i>b){
//             arr.push(i)
//         }
//     }
//     return arr;
//  }
//  let resu = filtering (marks,80)

//  console.log(resu)

//  let result = marks.filter((element)=> element>70)
  
//  let res1 = marks.filter((element)=>element>30 && element < 90)
// console.log(res1)
 
//--------------------------------------------------------------------------------------------
// method : map
// map(modification,transformation)
// salary =[120,250,340]
// let res = salary.map((ele) => ele + 50)
// console.log(res)
//-------------------------------------------------------------------------------------------

// salary =[120,250,340]
// let res = salary.map((ele) => ele > 50)
// console.log(res)

//-------------------------------------------------------------------------------------------

// //function declaration
// function findSum(a,b){
//     return a+b;
// }
// // function ezpression
// let findSum1 = function(a,b){
//     return a+b;
// }
// //Arrow function (simplify function expression)
// let findSum2 = ((a,b) => a+b )

//-------------------------------------------------------------------------------------------
//  method : Reducer 
//  reduce(aggregations)
// marks.reduce((accumulator,element)=> accumulator + element 
// let marks=[98,70,40,89,56]
// let res = marks.reduce((sum,ele) => sum+ele)
// console.log(res)

// // find small element of marks







// let students = [
//     {sno: 1, name: "ravi", age:21},
//     {sno: 2 ,name:"vikas", age:34},
// ];

// age greater than 20
// let res1 = students.filter((ele) => ele.age>20)
// console .log(res1);

// // increment 2 yrs
// let res2 = students.map((ele)=>{
//     if (ele.name === 'ravi'){
//        return  ele.age += 2;

//     }

//     return ele});

// console.log(res2)

// sum of ages
// let res3 = students.reduce((sum,stu) => sum+stu.age,0)
// console.log(res3)

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
// // Assignment 01
// // Assignment 1: Daily Temperature Analyzer
// // ----------------------------------------
// // Scenario : You are analyzing daily temperatures recorded by a weather app.

// // Test data:
// // const temperatures = [32, 35, 28, 40, 38, 30, 42];

// // Tasks:
// //     1. filter() temperatures above 35
// //     2. map() to convert all temperatures from Celsius → Fahrenheit
// //     3. reduce() to calculate average temperature
// //     4. find() first temperature above 40
// //     5. findIndex() of temperature 28

//  const temp  = [32, 35, 28, 40, 38, 30, 42];
//     // let res = temp.filter((ele)=>ele>35)
//     // console.log(res);

// //     let res1 = temp.map((ele)=>
// //          ele+273
// // )
// //     console.log(res1)

//     let res2 = temp.reduce((sum , ele)=>
//         sum + ele,0)/temp.length
//         console.log(res2)

//     let res3 = temp.find((ele)=>ele >40);
//     console.log(res3)

//     let res4 = temp.findIndex((ele)=>ele === 28)
//     console.log(res4)

    //-------------------------------------------------------------------------------------------

// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"



// const courses = ["javascript", "react", "node", "mongodb", "express"];
//     let res1 = courses.filter((ele)=> ele.length >5)
//     console.log(res1)

//     let res2  = courses.map((ele)=>ele.toUpperCase())
//     console.log(res2)

//     let res3 = courses.reduce((con , ele) => con + ele)
//     console.log(res3)

//     let res4 = courses.find((ele) => ele === "react")
//     console.log(res4)

    //-------------------------------------------------------------------------------------------
    
// // Assignment 3: Student Marks List
// // --------------------------------
// // Scenario : You receive marks from an exam system.

// // Test data:
// // const marks = [78, 92, 35, 88, 40, 67];

// // Tasks:
// //     1. filter() marks ≥ 40 (pass marks)
// //     2. map() to add 5 grace marks to each student
// //     3. reduce() to find highest mark
// //     4. find() first mark below 40
// //     5. findIndex() of mark 92


// // const marks = [78, 92, 35, 88, 40, 67];

// // let res1 = marks.filter((ele)=> ele>=40)
// // console.log(res1)

// // let res2 = marks.map((ele) => ele-5)
// // console.log(res2)

// // let res3 = marks.reduce((acc , ele)=> acc>ele? acc :ele)
// // console.log(res3)

// //-------------------------------------------------------------------------------------------

// // ASSIGNMENT 1:
// // -------------
// // You are building a shopping cart summary for an e-commerce website.

// // Test Data : 
// // const cart = [
// //   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
// //   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
// //   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
// //   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// // ];

// // Tasks:
    
// // Use filter() to get only inStock products
// // Use map() to create a new array with:  { name, totalPrice }
// // Use reduce() to calculate grand total cart value
// // Use find() to get details of "Mouse"
// // Use findIndex() to find the position of "Keyboard"ASSIGNMENT 1:



// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// let res1 = cart.filter((ele)=>ele.inStock)
// console.log(res1)

// let res2 = cart.map(ele=>({
//   name : ele.name,
//   totalPrice : ele.price * ele.quantity
//    }));

// console.log(res2)

// let res3 = cart.reduce((acc ,ele)=>acc + ele.price,0)
// console.log(res3)

// let res4 = cart.find((ele)=>ele.name === "Mouse")
// console.log(res4)


// const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
// console.log("Keyboard Index:", keyboardIndex);


// //-------------------------------------------------------------------------------------------
// // ASSIGNMENT 2:
// // -------------
// // Student Performance Dashboard

// // You are working on a college result analysis system.

// // Test Data:
// // const students = [
// //   { id: 1, name: "Ravi", marks: 78 },
// //   { id: 2, name: "Anjali", marks: 92 },
// //   { id: 3, name: "Kiran", marks: 35 },
// //   { id: 4, name: "Sneha", marks: 88 },
// //   { id: 5, name: "Arjun", marks: 40 }
// // ];

// // Tasks:
    
// // filter() students who passed (marks ≥ 40)
// // map() to add a grade field
// //         ≥90 → A
// //         ≥75 → B
// //         ≥60 → C
// //         else → D

   
// // reduce() to calculate average marks
// // find() the student who scored 92
// // findIndex() of student "Kiran"
// // ASSIGNMENT 2:
// // -------------
// // Student Performance Dashboard

// // You are working on a college result analysis system.

// // Test Data:
// // const students = [
// //   { id: 1, name: "Ravi", marks: 78 },
// //   { id: 2, name: "Anjali", marks: 92 },
// //   { id: 3, name: "Kiran", marks: 35 },
// //   { id: 4, name: "Sneha", marks: 88 },
// //   { id: 5, name: "Arjun", marks: 40 }
// // ];

// // Tasks:
    
// // filter() students who passed (marks ≥ 40)
// // map() to add a grade field
// //         ≥90 → A
// //         ≥75 → B
// //         ≥60 → C
// //         else → D

   
// // reduce() to calculate average marks
// // find() the student who scored 92
// // findIndex() of student "Kiran"

// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];
// let passedStudents = students.filter((stuObj) => stuObj.marks>=40)
// console.log(passedStudents);

// // let grade = students.map(stuObj => {
// //   let g;
// //   if (stuObj.marks >= 90) g = "A";
// //   else if (stuObj.marks >= 75) g = "B";
// //   else if (stuObj.marks >= 60) g = "C";
// //   else g = "D";

// //   return { ...stuObj, grade: g };  // spread original + new grade
// // });

// // console.log(grade);

// // let avgMarks = students.reduce((acc,ele) => ele.marks+acc,0)
// // console.log(avgMarks)

// // let topper = students.find((ele)=> ele.marks === 92 )
// // console.log(topper)

// // let findKiran = students.findIndex((ele)=>ele.name ==="Kiran")
// // console.log(findKiran)

// //-------------------------------------------------------------------------------------------

// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields









// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90














// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

// Test data:
// const settings = {
//   theme: "light",
//   notifications: true,
//   autoSave: false,
//   language: "en"
// };


// Tasks :
//     1.Toggle theme between "light" and "dark"
//     2. Turn autoSave to true
//     3. Remove the notifications setting
    // 4. Freeze the settings object so it cannot be modified


    // Assignment : 1

  const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

//     1. Read and print the user’s name and email

const readObj = (user) => {
  return user.map(({ name, email }) => ({ name, email }));
};

console.log(readObj(user));

