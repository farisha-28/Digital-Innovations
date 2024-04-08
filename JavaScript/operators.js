let x =1;

//relational operator
console.log(x > 0);
console.log(x >= 1);
console.log(x <= 1);

//strict equality operator (matches type+value)
console.log(1 === 1); 
console.log('1' === 1); 

//loose equality operator ( only matches the value)
console.log(1 === 1); 
console.log('1' === 1); 
console.log(true === 1); 
console.log('1.5' === 1); 

//ternary or conditional operator.
// If a customer has more than 100 points, they are a gold customer , otherwise they are a silver customer.
// store the result of points>100 in type, if true the result is gold, if not, it will be silver.
let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// Logical Operator.
// LOGICAL AND (&&)
// return true if both operands are ture.

console.log(false && true);
console.log(true && false);
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical Operator.
// LOGICAL OR (||)
// return true if one of the operands is True.

console.log(false || true);
let highIncome2 = false;
let goodCreditScore2 = true;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;

console.log(eligibleForLoan2);

// NOT (!)

let applicationRefused = !eligibleForLoan2;
console.log('Application Refused?'+applicationRefused);

