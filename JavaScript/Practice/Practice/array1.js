const numbers = [3,4]

//End
numbers.push(5,6)

//Beginning
numbers.unshift(1,2)
console.log(numbers);

//Middle -- the index number of, no of deleted element, values to replace.
numbers.splice(2,1,'a', 'b');
console.log(numbers);  // alt+arrow down n up

// finding primitive data types
const num = [1,2,3,1,4]
console.log(num.indexOf('a'));
console.log(num.lastIndexOf('1'));
console.log(num.lastIndexOf(1));

console.log(num.indexOf(1) != -1);
console.log(num.includes(1)); //same as the upper one code.

//finding reference types
// find method: pass a function(element) to check if the element is greater than 10, or not. if True, it will return True,and stop checking.
// it return the first element found in the array.
// arr1 = [5, 12, 8, 130, 44]
// var found = arr1.find(function (element)){
    //return element>10;
//}
//console.log(found);

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}, // shift+Alt+down arrow.
];

// console.log(courses.includes({ id: 1, name: 'a'})) //returns false. so for reference we have to use find
// if we have the course with name a.
const course = courses.find(function(course){
    return course.name === 'a'; //return course.name === 'xyz'; will return undefined.

});

console.log(course);
const c = courses.findIndex(function(course){
    return course.name === 'a'; //return course.name === 'xyz'; will return -1

});

console.log(c);

// Removing Elements
 let n = [1,2,3,4,5]
 let another = n
// const last = n.pop(); //to remove the last element
// console.log(last)
// const first = n.shift() //to remove the first element
// console.log(first)
// const mid = n.splice(2,1) //remove elements from the middle - n.splice(2,2)
// console.log(mid)

//Emptying an array
//console.log(n.length = 0)
let b = n.splice(0, n.length)
console.log(b)


     




