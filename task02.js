// Task 2: Define a “userBio” object with the following properties: occupation, height, gender, and nationality. Using object destructuring, get “gender” and “occupation” from the object.  Use template literals to make a statement that displays the user’s gender and occupation. Call the function three times with three different users.

const info =(userBio)=>{
    const {occupation, gender} = userBio;
    console.log(`${occupation} and ${gender}`);
}
const firstUser ={
    occupation:`teacher`,
    height:`175cm`,
    gender:`male`,
    nationality:`nigeria`
    };
const secondUser ={
    occupation:`driver`,
    height:`175cm`,
    gender:`male`,
    nationality:`nigeria`
    };
const thirdUser ={
    occupation:`pilot`,
    height:`175cm`,
    gender:`female`,
    nationality:`nigeria`
    };
            


info(firstUser);
info(secondUser);
info(thirdUser);

