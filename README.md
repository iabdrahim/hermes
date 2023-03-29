# Sending Letters to Future README

This is a personal project that allows users to send letters to themselves or to other people in the future through email. It is built using Next.js and Mongoose.
## Installation

To install the project, follow these steps:

    Clone the repository to your local machine.
    Install the dependencies by running npm install or yarn install.
    Create a .env.local file in the root of the project and set the following environment variables:

`
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>

    Start the development server by running npm run dev or yarn dev.

`

## Technologies Used

    Next.js
    Mongoose
    Nodemailer
    React
    Scss
    typescript
    
## Functionality

The project allows users to create letters that are stored in a MongoDB database. Users can set a delivery date for the letter, which can be either in the future or the past. When the delivery date is reached, the letter is sent to the recipient's email address. If the recipient is the sender, the letter is stored in the user's account and can be viewed in the "Sent Letters" section.
Routes

## The project has the following routes:

    /: Home page with a form to create a new letter.
    /login: Login page for users to log in to their account.
    /signup: Signup page for new users to create an account.
    /letter/:id: Page to view a single letter by its ID.

## API Endpoints

The project has the following API endpoints:

    POST /api/auth/signup: Creates a new user account.
    POST /api/auth/login: Logs in a user and returns a JWT token.
    POST /api/letters: Creates a new letter and stores it in the database.
    GET /api/letters: Returns a list of all letters for the current user.
    GET /api/letters/sent: Returns a list of all letters sent by the current user.
    GET /api/letters/received: Returns a list of all letters received by the current user.
    GET /api/letters/:id: Returns a single letter by its ID.
    PUT /api/letters/:id: Updates a letter by its ID.
    DELETE /api/letters/:id: Deletes a letter by its ID.

## License

This project is licensed under the MIT License.
