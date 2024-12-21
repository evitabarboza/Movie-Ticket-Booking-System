// ticketBooking.js
const readline = require('readline');

// Array to hold movie data (title, showtime, seats available)
let movies = [
    { title: 'Movie A', showtime: '12:00 PM', availableSeats: 50, popularity: 100 },
    { title: 'Movie B', showtime: '3:00 PM', availableSeats: 30, popularity: 150 },
    { title: 'Movie C', showtime: '6:00 PM', availableSeats: 80, popularity: 75 }
];

// Queue implementation for managing ticket booking requests
class BookingQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(ticket) {
        this.queue.push(ticket);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Sort movies based on popularity
const sortMoviesByPopularity = () => {
    movies.sort((a, b) => b.popularity - a.popularity);
};

// Prompt user to book tickets
const bookTicket = (rl) => {
    sortMoviesByPopularity();
    console.log('\nMovies available for booking:');
    movies.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title} (${movie.showtime})`);
    });

    rl.question('Enter the number of the movie you want to book: ', (movieChoice) => {
        const movieIndex = parseInt(movieChoice) - 1;

        // Validate movie choice
        if (isNaN(movieIndex) || movieIndex < 0 || movieIndex >= movies.length) {
            console.log('Invalid movie choice. Please select a valid movie number.');
            return bookTicket(rl);  // Ask the user to choose a movie again
        }

        rl.question('How many tickets would you like to book? ', (numTickets) => {
            const selectedMovie = movies[movieIndex];
            const ticketsToBook = parseInt(numTickets);

            // Validate number of tickets
            if (isNaN(ticketsToBook) || ticketsToBook <= 0) {
                console.log('Invalid number of tickets. Please enter a valid number.');
                return bookTicket(rl);  // Ask the user to enter a valid number of tickets again
            }

            // Check if enough seats are available
            if (selectedMovie.availableSeats >= ticketsToBook) {
                selectedMovie.availableSeats -= ticketsToBook;
                console.log(`Successfully booked ${ticketsToBook} tickets for "${selectedMovie.title}"!`);
            } else {
                console.log('Not enough seats available for this movie.');
            }
            rl.close();
        });
    });
};

module.exports = { bookTicket };
