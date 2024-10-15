// Task 1: Define an arrow function that takes four arguments: date of birth(DOB), year,name, and location. The function should calculate the user’s age. Using template literal,dynamically display the “Hello name(user’s name) from (location), your current age is (age) and return the age.

const x = new Date();
const arg =(name, location, dob, year)=>{
    return `Hello name ${name} from ${location}, your current age is ${year - dob}`;    
}
const result = arg('Paul', 'London', 1977, x.getFullYear());


console.log(result);

// const x = new Date();
// console.log(x.getFullYear());

