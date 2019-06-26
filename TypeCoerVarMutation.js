/**Type Coercion and Variable Mutation */

let firstName = "John";
let age = 27;

//Type Coercion
console.log(firstName + " " + age);

let job, isMarried;
job = "Software Engineer";
isMarried = false;
console.log( firstName +" is a" +age + " years old. He is a " + job + ". Is he Married ? " + isMarried);


//Variable Mutation
age = 'twenty eight';
job = 'driver';
alert( firstName +' is a' +age + ' years old. He is a ' + job + '. Is he Married ? '+ isMarried);

var lastName = prompt('What is his lastName?')
console.log(firstName+ ' '+lastName);
