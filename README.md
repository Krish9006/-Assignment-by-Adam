# Shopping Cart Project - Assessment Submission

This repository contains the solution for enabling 'Cart' and 'Buy All' functionalities.

## Features Implemented
1.  **Frontend-Backend Connection**: Configured environment variables to establish communication between the React frontend and Node.js backend.
2.  **Cart**: Users can authenticate, browse products, and add them to their cart.
3.  **Buy All (Checkout)**: A "Safe Mode" checkout flow is implemented. It demonstrates the complete order process by simulating a successful Stripe transaction (as a production Stripe key was not available).

## Setup Instructions

1.  **Clone the repository**
2.  **Install Dependencies**
    ```bash
    npm install
    cd server
    npm install
    cd ..
    ```
3.  **Environment Setup**
    *   **Root**: Copy `.env.example` to `.env`.
        ```bash
        cp .env.example .env
        ```
    *   **Server**: Copy `server/.env.example` to `server/.env`.
        ```bash
        cd server
        cp .env.example .env
        cd ..
        ```
4.  **Run the Project**
    In the root directory, run:
    ```bash
    npm run dev
    ```
    This command starts both the client (http://localhost:5173) and the server (http://localhost:3000).

## Usage
1.  Register/Login.
2.  Add items to your cart from the Products page.
3.  Go to Cart and click "Secure Checkout" to see the success flow.
