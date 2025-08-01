/*Part 2: Practical Functions

Create a file called practical-functions.js that includes:

    A function to format a phone number (e.g., “1234567890” into “(123) 456-7890”)
    A function to validate an email address format
    A function to calculate age from birth year

*/

    let phoneNumber = "1234567890";
function formatPhoneNumber(phone) {
    if (phone.length !== 10 || isNaN(phone)) {
        return "Invalid phone number";
    }
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
};

console.log("Formatted Phone Number:", formatPhoneNumber(phoneNumber),"\n");



//* A function to validate an email address format*/
function emailcorrect(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
}

console.log("Is email valid?", emailcorrect("Babylonsoap@gmail.com"), "\n");


/*A function to calculate age from birth year*/
function ageCalc(byear){
    const currentYear = new Date().getFullYear();
    return currentYear - byear;
}

console.log("Age:", ageCalc(2001),"\n");


function simpleEmailCheck(email) {
    return email.includes("@") && email.includes(".");
}

console.log("Is email valid?", simpleEmailCheck("Babylonsoap@gmail.com"), "\n");
