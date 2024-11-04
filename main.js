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
        // Task 3: Display Tickets Dynamically on the Page
        tickets.forEach(ticket => {
            // Create a new ticket element for each ticket
            const ticketElement = document.createElement('div');
            ticketElement.classList.add('ticket');
            ticketElement.innerHTML = `
                <h3>Ticket ID: ${ticket.id}</h3>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
                <hr>
            `;
            ticketContainer.appendChild(ticketElement);
        });
      // Task 4: Ensure Cleanup
    } catch (error) {
        // Handle any errors that occur during the fetch process
        errorMessageElement.textContent = error.message;
    } finally {
        // Hide any loading indicators here if needed
        console.log('Fetch attempt finished');
    }
}

// Call the function to fetch tickets when the page loads
fetchTickets();
