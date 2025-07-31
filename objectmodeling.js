// Week 1 Session 3 Homework: Object Modeling

// Task 1: Recipe Object
// TODO: Create a recipe object with ingredients list and instructions
let recipe = {
    name: "Chocolate Chip Cookies",
    servings: 24,
    // Add more properties here
    ingredients: [
        {name: "Chocolate Chips", quantity: "2 cups"},
        {name: "Flour", quantity: "3 cups"},
        {name: "Sugar", quantity: "1.5 cups"}
    ],
    instructions: [ "put it together dance around it and summon your own chocolate chip cookie: \n"

    ]
};

// Test your object
console.log(`Recipe: ${recipe.name}`);
// Add more tests to display ingredients and instructions
console.log(`Servings: ${recipe.servings}`);
console.log("Ingredients:");
recipe.ingredients.forEach(ingredient => {
    console.log(`- ${ingredient.quantity} of ${ingredient.name}`);
});
console.log("instructions:", recipe.instructions.join(" "));


// Task 2: Bank Account Object
// TODO: Create a bank account object with balance and transaction methods
let bankAccount = {
    accountNumber: "1234567890",
    balance: 1000,
    // Add more properties and methods here

    deposit: function (amount) {
        // Your code here
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    },

    withdraw: function (amount) {
        // Your code here
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    },

    getBalance: function () {
        // Your code here
        return this.balance;
    },

};

// Test your object
bankAccount.deposit(500);
console.log("Balance after deposit:", bankAccount.getBalance());
bankAccount.withdraw(200);
console.log("Balance after withdrawal:", bankAccount.getBalance());


console.log("\n");

// Task 3: Music Album Object
// TODO: Create a music album object with tracks and duration
let album = {
    title: "Greatest Hits",
    artist: "The Classics",
    // Add more properties here
    tracks: [],
    duration: 0,

    addTrack: function (trackName, duration) {
        // Your code here
        this.tracks.push({name: trackName, duration: duration});
        this.duration += duration;
    },

    getTotalDuration: function () {
        // Your code here
        return this.duration;
    },
};

// Test your object
album.addTrack("Song One", 3.5);
album.addTrack("Song Two", 4.2);
console.log(`Album: ${album.title} by ${album.artist}`);
console.log("Total album duration:", album.getTotalDuration(), "minutes");


// BONUS CHALLENGES
// 1. Add a method to the recipe object to scale ingredients for different serving sizes
// 2. Add transaction history to the bank account object
// 3. Add a method to the album object to find tracks by name*/