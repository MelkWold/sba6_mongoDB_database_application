# SBA 319: MongoDB Database Application

## Project Description and Features
This project is designed to create a database and user interface that connects employers, employees and job advertisements. Three schemas are created with **data validation rules** and **indices** that enhance query performace. 
Each collection is seeded with at least 25 initial randomly-generated documents. The schema included in the database are:

1. employerSchema: defines the schema for the Employers collection.
2. jobAdvertisementSchema: defines the schema for the Job Advertisements collection.
3. jobSeekerSchema: defines the schema for the Job Seekers collection.

## Languages, tools and frameworks uses:
1. JavaScript
2. Mongoose
3. Express.js
4. Node.js

## API Endpoints
|   Method  |          Endpoint                |    Description                         |
|-----------|----------------------------------|----------------------------------------|
|    POST   | /api/jobs                        | Create a new job advertisement         |
|    GET    | /api/jobs                        | Get all jobs in the database           |
|    GET    | /api/jobs/:title                 | Get a specific job by title            |
|    PUT    | /api/jobs/:title                 | Update a specific job by title         |
|  DELETE   | /api/jobs/:title                 | Delete a specific job by title         |
|    POST   | /api/employers                   | Create a new job advertisement         |
|    GET    | /api/employers                   | Get all jobs in the database           |
|    GET    | /api/employers/:companyName      | Get a specific job by title            |
|    PUT    | /api/employers/:companyName      | Update a specific job by title         |
|  DELETE   | /api/employers/:companyName      | Delete a specific job by title         |
|    POST   | /api/jobseekers                  | Create a new job advertisement         |
|    GET    | /api/jobseekers                  | Get all jobs in the database           |
|    GET    | /api/jobseekers/:jobSeekerName   | Get a specific job by title            |
|    PUT    | /api/jobseekers/:jobSeekerName   | Update a specific job by title         |
|  DELETE   | /api/jobseekers/:jobSeekerName   | Delete a specific job by title         |
|-----------|----------------------------------|----------------------------------------|


## Reflection
`What could you have done differently during the planning stages of your project to make the execution easier?`
I am pleased with the overall execution of this project. I started the project with a clear idea of what I wanted to build and followed the steps that I learned from class to methodically build the database,seed with random seed data, and build and test the routes. 


`Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?`
The requirements are fairly clear. 

`What would you add to or change about your application if given more time?`
I would have funished builkding the front end and integrating it with the back end had I had more time. 

`Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:`

Now that we have discussed both the frontend and backend, it's time to focus on building fully-functional full stack project. That should be my next target. 