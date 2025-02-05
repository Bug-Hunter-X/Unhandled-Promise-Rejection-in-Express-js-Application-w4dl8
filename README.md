# Unhandled Promise Rejection in Express.js Application

This repository demonstrates a common error in Express.js applications: the lack of proper error handling for asynchronous operations.  Asynchronous operations (such as database queries or external API calls) can throw errors that are not properly caught and handled, leading to unexpected behavior or crashes.  The example showcases this issue and its solution.

## Bug

The `bug.js` file demonstrates an Express.js application with an asynchronous operation that might throw an error.  Crucially, there is no `catch` block to handle potential errors.

## Solution

The `bugSolution.js` file provides a corrected version of the application.  It includes a `catch` block to gracefully handle errors from the asynchronous operation, sending an appropriate error response to the client and logging the error to the console.

## How to Reproduce

1.  Clone the repository.
2.  Run `npm install` to install the necessary dependencies.
3.  Run `node bug.js`.  You will notice that the server starts, but errors are not reported in a user friendly way. If `someAsyncOperation()` throws an error, the server will continue to run silently without proper error handling.
4.  Run `node bugSolution.js`.  The server starts and handles errors more gracefully, providing appropriate error responses and logging the error details.  This prevents unexpected application crashes and enables more robust error handling.
