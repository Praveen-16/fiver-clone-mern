# MERN Fiverr-like App

This is a Fiverr-like web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Table of Contents

- [MERN Fiverr-like App](#mern-fiverr-like-app)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
  - [Seller Account](#seller-account)
      - [important](#important)
  - [Buyer Account](#buyer-account)
- [Features](#features)
- [Environment Variables](#environment-variables)
  - [Contributing](#contributing)

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Make sure you have the following software/tools installed:

- Node.js
- Yarn
- MongoDB

### Installation

Clone the repository and install dependencies for both the client and server:

```bash
# Clone the repository
git clone https://github.com/yourusername/yourproject.git

# Navigate to the client directory
cd client
yarn

# Start the frontend development server
yarn run dev

# Open a new terminal, navigate to the API directory
cd ../api
yarn

# Start the backend server
nodemon server.js

```
# Usage
Once the project is set up, you can use the app with two types of accounts: seller and buyer.

## Seller Account  

- Create and delete own gigs.
- View gigs by categories.
- view orders
- Chat with customers.
- Receive ratings and reviews.

#### important 
when ever you upload images while creating gig , you must click on upload button after choosing file, 
you must click upload button after chosing cover image.
and also you should click on upload button after chossing gig images also

## Buyer Account

- View gigs by catagires.
- Review and rate gigs.
- Buy gigs.
- view orders
- Chat with gig owners.

# Features

- Create and delete gigs.
- View gigs by categories.
- Chat with customers.
- Rating and reviewing.

# Environment Variables
    MONGO= Your_MongoURL
    JWT_KEY=Your_Secret_key
    STRIPE= Your_Stripe_key

## Contributing
Feel free to contribute to this project! Fork the repository and submit a pull request.


 
