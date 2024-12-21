// app.js
const express = require('express');
const { bookTicket } = require('./ticketBooking');
const { displaySeating } = require('./seating');
const readline = require('readline');

const app = express();
const PORT = 3000;

// Setup command line interface (CLI)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Home route for express server
app.get('/', (req, res) => {
    res.send('Welcome to the Movie Ticket Booking System');
});

// Main function to interact with the user via CLI
const startCLI = () => {
    console.log('\nChoose an action:');
    console.log('1. Book a ticket');
    console.log('2. View seating arrangement');
    console.log('3. Exit');

    rl.question('Enter your choice: ', (choice) => {
        if (choice === '1') {
            bookTicket(rl);  // Call the bookTicket function
        } else if (choice === '2') {
            displaySeating();  // Show seating arrangement
            rl.question('Press any key to go back to the main menu...', () => {
                startCLI();  // Return to the main menu
            });
        } else if (choice === '3') {
            console.log('Goodbye!');
            rl.close();  // Exit the application
        } else {
            console.log('Invalid choice, please try again.');
            startCLI();  // Re-run the menu
        }
    });
};

// Run the app
app.listen(PORT, () => {
    console.log(`Movie Ticket Booking System running on port ${PORT}`);
    startCLI();  // Start the CLI menu
});
