# Social Network API

## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. As a Software Engineers we all used several technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that we understand how to build and structure the API first.

My Challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages.

## Table of Contents 
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Contributing](#contributing)
- [Questions](#questions)
- [Walkthrough Video](#walkthrough-video)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./assets/demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./assets/demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./assets/demo-03.gif)

In addition to this, my walkthrough video will show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./assets/demo-04.gif)

In addition to this, my walkthrough video will show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

## Installation

``
- You will need to Install [Insomnia](https://insomnia.rest/download). 
- `Node.js` and `MongoDB` is required to run the application.

``
1. Download the zip file and copy it to a directory of your choice or clone to a directory of your choice using your terminal. 
2. Open the file in VS Code or any editor you prefer.
3. Open the terminal in VS Code and make sure you’re in the correct directory.
4. Create a `.gitignore` file and include `node_modules/`, `.env/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.
5. Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.
6. Ensure inquirer is installed [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Run `npm i` to install dependencies in local project directory.
7. To invoke the application, run `npm start`.
8. When the server is started, the Mongoose models are synched to the MongoDB database.
9. Open MongoDB and connect to the MongoDB URI `mongodb://localhost:27017`. On the list of databases, click on `socialDB` to see `thoughts` and `users` data.
10. To create seed data run `node utils/seed.js`, and to test the API routes, use [Insomnia](https://insomnia.rest/download).

## Contributing

Any Contribution is more than welcome!

## Questions

If you have any question, Email me at: yana.mishina.92@gmail.com

Find me on GitHub: [Ymishyna](https://github.com/Ymishyna)

## Walkthrough Video

``````
Disclaimer: The following video provides an illustrative example of how to respond to prompts using the given content. It is intended solely for instructional purposes and to showcase the concept. Users are encouraged to utilize their own responses, thoughts, and ideas when interacting with prompts to achieve personalized and authentic outcomes. The video's content should not be considered prescriptive or definitive, as individual preferences, opinions, and circumstances vary. Viewer discretion is advised, and any actions taken based on the video's content are the responsibility of the user.
``````

![Walkthrough Video Link](https://drive.google.com/file/d/1jazv4GTwpemZ1rM8n_BX1VEamGKU-M-4/view?usp=sharing).


