# Ticketing

This repository contains a microservice-based web application called "Ticketing." The application enables users to buy and sell tickets for various events. The application is designed with a microservice architecture, consisting of multiple services that work together to provide a seamless experience. Below you will find an overview of the application's features, the services it comprises, and the technologies used.


## Features

1. **Ticket Listing**: Users can create listings for tickets they want to sell. They can provide details such as the event name, ticket price, and quantity available.

2. **Ticket Purchase**: Any user can browse the available tickets and make purchases. Once a ticket is purchased, it is marked as sold and no longer available for others to buy.

3. **Ticket Locking**: When a user begins the purchase process for a ticket, it gets locked for a certain amount of time. This prevents other users from purchasing the same ticket concurrently. If the purchase is not completed within the specified time, the ticket lock expires, and the ticket becomes available again.

4. **Ticket Price Editing**: Sellers have the ability to edit the price of their tickets as long as they are not locked by an ongoing transaction. This feature allows sellers to adjust prices based on market demand.

## Services

The Ticketing application consists of the following five services:

1. **Auth Service**:
   - Responsible for user authentication and authorization.
   - Handles user registration, login, and authentication.
   - Generates and validates JSON Web Tokens (JWT) for secure communication between services.

2. **Tickets Service**:
   - Handles CRUD (Create, Read, Update, Delete) operations on tickets.
   - Allows users to list tickets for sale.
   - Provides endpoints for fetching and updating ticket information.
   - Implements ticket locking mechanism for a certain period.

3. **Orders Service**:
   - Manages the lifecycle of orders in the system.
   - Allows users to create new orders, view existing orders, and complete payments.
   - Handles events related to orders, such as cancellation or expiration.

4. **Payments Service**:
   - Handles credit card transactions and payment processing.
   - Integrates with external payment gateways to securely process payments.
   - Ensures the completion of payments for successful orders.

5. **Expiration Service**:
   - Handles all the expiration tasks

## Technology Stack

The Ticketing application utilizes the following technologies:

- **Typescript**: A typed superset of JavaScript, providing enhanced development capabilities and improved code quality.
- **Next.js**: A React framework for server-side rendering and building scalable applications.
- **React**: A JavaScript library for building user interfaces.
- **Docker**: A containerization platform that allows for easy deployment and scalability of the application.
- **Redis**: An in-memory data store used for caching and session management.
- **NATS**: A lightweight and high-performance messaging system for inter-service communication.
- **JavaScript**: The primary programming language used in combination with TypeScript for application development.

## Getting Started

To set up the Ticketing application locally, please follow these steps:

1. Clone this repository: `git clone https://github.com/chrismatgit/ticketing.git`
2. Install dependencies for each service by navigating to their respective directories (e.g., `auth`, `tickets`, `orders`, `payments`) and running `npm install`.
3. Ensure you have Docker installed on your local machine.
4. Start the required infrastructure components (e.g., NATS, Redis) using Docker.
5. Build each service using `skaffold run dev`.

## Contributing

We welcome contributions to the Ticketing application! If you would like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your contribution.
2. Make your changes and ensure the code passes all tests.
3. Submit a pull request detailing the changes you made and explaining their purpose.

I appreciate your contributions and value the time and effort you put into making this project better!

## License

The Ticketing application is open-source and licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the application as permitted by the license.

## Contact

If you have any questions, feedback, or suggestions regarding the Ticketing application, please reach out to me at [@chris_matabaro](https://twitter.com/chris_matabaro) or [chris-matabaro](https://linkedin.com/in/chris-matabaro). I appreciate your interest and would be happy
