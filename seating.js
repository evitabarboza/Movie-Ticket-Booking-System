// seating.js
const readline = require('readline');

// Simulate a theatre seating chart as a graph (2D array)
const seatingChart = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O']
];

// Display seating arrangement
const displaySeating = () => {
    console.log('\nSeating Arrangement:');
    seatingChart.forEach((row, rowIndex) => {
        const rowDisplay = row.map((seat) => seat === 'O' ? 'O' : 'X').join(' ');
        console.log(`Row ${rowIndex + 1}: ${rowDisplay}`);
    });
};

// Simulate booking a seat (mark as 'X' when taken)
const bookSeat = (row, col) => {
    if (seatingChart[row][col] === 'O') {
        seatingChart[row][col] = 'X';
        console.log(`Seat booked at Row ${row + 1}, Column ${col + 1}`);
    } else {
        console.log('Seat is already taken.');
    }
};

module.exports = { displaySeating, bookSeat };
