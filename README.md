# coding-challenge-celer
Coding challenge for the selection process 


## Welcome to the Coding Challenge for Celer! 
This repository contains a TypeScript-based Express server designed to handle user data and monthly resume submissions. The server is built with a focus on clean architecture, scalability, and maintainability.

## The challenge is in three parts:
1. **Controller**: Implement the business logic for handling user data and monthly resumes.
2. **DB**: Set up a MySQL database to store user and monthly resume data.
3. **Finalize the challenge**: Ensure the server is fully functional, with endpoints for user registration and monthly resume submission.

## Personal advice:
**Navigate the codebase**: Familiarize yourself with the structure and flow of the code. The entry point is `src/index.ts`, which initializes the Express server and loads environment variables. From then understand how the application is structured into controllers, models, and routes. It will help you understand how to implement the required features.

## Code Structure
```
my-ts-express-server/
├── .env
├── .env.example  
├── package.json
├── Makefile
├── tsconfig.json
├── src/
│   ├── index.ts        (entry point - server startup)
│   ├── app.ts          (express app + middleware)
│   ├── controllers/    (business logic)
│   │   └── challenge/
│   │       ├── challengeController.ts (controller logic for challenge)
│   ├── models/         (database models)
│   │   ├── User.ts     (user model)
│   │   └── MonthlyResume.ts (monthly resume model)
│   └── routes/
│       ├── index.ts    (route definitions)
└── node_modules/
```