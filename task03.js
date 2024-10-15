// Task 3: Create an array of objects of length 4. Each object should have the following properties: firstName, lastName, complexion, and occupation. Loop through the array, for each item, display the user’s info in a separate div created dynamically.

const userInfo =[
    {firstName:'John', lastName:'Doe', complexion:'Dark', occupation:'Teacher'},
    {firstName:'lora', lastName:'john', complexion:'lightskin', occupation:'tailor' }, 
    {firstName:'bimbo', lastName:'lawerence', complexion:'light', occupation:'swimmer' },
    {firstName:'Aishat', lastName:'bulu', complexion:'verydark', occupation:'capenter' }        
 
]
// document.getElementById('obj').innerHTML = text;   
console.log(Object.values(userInfo));

console.log('111111111111111111111111');

// for (x of userInfo){
//     console.log(userInfo);   
// }

// const text = `My is ${lastName} ${firstName} i'm a ${occupation} and i'm ${complexion} complexion`;

userInfo.forEach(y => {
 console.log(y);
 
    
});


