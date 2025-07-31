/*Create a file called control-practice.js that includes a:​ ​

    Shopping discount calculator (if/else based on purchase amount)​
    Simple menu system that repeats until user chooses exit​
    Game score evaluator that gives feedback based on points​
*/
//shopping

console.log("Shopping discount:")
let shoppingAmount = 500;
if (shoppingAmount >= 1000) {
    console.log("You get a 20% discount!\n");
} else if (shoppingAmount >= 500) {
    console.log("You get a 10% discount!\n");
}

// game score
function scoreEvaluator(score) {
    if (score >= 90) {
        console.log("Excellent\n");
    } else if (score >= 75) {
        console.log("Good   \n");
    } else if (score >= 50) {
        console.log("You passed \n");
    } else {
        console.log("You failed \n");
    }
}

function randomnum(x){
    return Math.floor(Math.random() * x);
}

console.log("game score:");
scoreEvaluator(randomnum(100));


//  Simple menu system that repeats until user chooses exit​
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("Menu:");
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Exit");
    readline.question("Please enter your choice (1-3): ", (menuChoice) => {
        switch (menuChoice) {
            case '1':
                console.log("You selected Option 1.\n");
                showMenu();
                break;
            case '2':
                console.log("You selected Option 2.\n");
                showMenu();
                break;
            case '3':
                console.log("Exiting the menu.\n");
                readline.close();
                console.log("Thank you for using the menu system!");
                break;
        } while (menuChoice !== '3');
});
}
showMenu();