// every method - check if every element is positive
const number = [1, 3, 5, 6, 8];
const allPositive = number.every(function(value){
    return value >= 0;
});
console.log(allPositive);

//some method - check if there's at least an element matches this criteria
const somePositive = number.some(function(value){
    return value >= 0;
});
console.log(somePositive);

//filter an array based on search criteria 
const filtered = number.filter(function(value){
    return value >= 0;
});
console.log(filtered);
const filt = number.filter(n => n >= 0);
console.log(filt);

//filer an array based on restaurant opening hours