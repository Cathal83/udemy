/**
 * Question 16 - What is the output?
 */

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;

list1.push(6, 7, 8);

console.log(list2);

// 1,2,3,4,5,6,7,8

// Last three numbers only pushed on list1.
// List2 being set to the exact same array as list1. Both referencing same array

// Doing the following would put list1 equal to new array buit list2 still equal to old
list1 = [10, 20, 30];

// Changing value of variable

// Passing by reference or value
// Value = if primitive data type or no properties such as String or Number

// passing by value
const myNum = 10;
// variable myNum set to value of 10

const myNum2 = myNum;
// This is being set to the value of 10

// Question 2 - set list2 to array to same value as list 1 without referencing the same array
const list22 = list1.slice();
