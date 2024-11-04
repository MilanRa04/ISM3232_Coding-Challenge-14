// Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = ''; // Clear previous error messages
    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.innerHTML = ''; // Clear previous tickets

    try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Parse the JSON response
        const tickets = await response.json();
        
        // Check if any tickets were returned
        if (tickets.length === 0) {
            throw new Error('No tickets found');
        }