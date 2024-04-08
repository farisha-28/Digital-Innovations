const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
console.log(combined);
const slice = combined.slice(2,4);
console.log(slice);

// spread operator to combine two arrays
let com = [...first, 'a', ...second, 'b'];
console.log(com);

//copy using spread operator
let copy = [...com];
console.log(copy)

//iterating array using for and callback function
const numb = [1,2,3,4]
for (let number of numb)
    console.log(number);

numb.forEach(function(number){
    console.log(number);
})
// different syntax for function
numb.forEach((number, index) => console.log(number, index));

// join the elements in array - important to create urls
console.log(numb.join('*'));
const message = "This is my first message.";
let split = message.split(' ') // console.log(message.split(' '));
console.log(split.join('-'));

// sortng arrays : primitive types
let a = [2,5,3,4,6]
console.log(a.sort());
console.log(a.reverse());
 
//sorting arrays: reference types
const d = [
    { id: 1, name: 'Node.js'},
    { id: 2, name:"javascript"}, //javascript will come later if it's in lower case because of ascii code. so to solve it exclude case sensitivity
    
];

d.sort(function(a, b){

    // to exclude case sensitivity
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1; 
    if(nameA > nameB) return 1;
    return 0;
});
console.log(d);