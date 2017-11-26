import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

/* Hands-On Lesson 5 Project 1 -- Single Application State*/
const arr = [
  {name: "chevy", count: 2},
  {name: "ford", count: 5},
  {name: "acura", count: 3},
  {name: "honda", count: 16},
];

const newArray = arr.filter(car => car.name === "ford")
console.log("Filter results:", newArray);





/* Hands-On Lesson 5 Project 2 -- Single Application State*/

const arr2 = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];
const addNewStudent = [...arr2, ...newStudents]
console.log(addNewStudent);

