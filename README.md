<br>
  <h1 align="center">NoSQL: Social Network API</h1>

![Badge](https://img.shields.io/badge/License-MIT-yellow.svg) ![JavaScript](https://img.shields.io/badge/JavaScript-red) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js@4.17.1](https://img.shields.io/badge/Express.js-pink) ![MongoDB](https://img.shields.io/badge/MongoDB-red) ![Mongoose@7.0.2](https://img.shields.io/badge/Mongoose-purple) ![Moment.js@2.0.9](https://img.shields.io/badge/Node.js-green)

## Description

The aim of this project was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The technologies utilised were Express.js for routing, a MongoDB database, the Mongoose ODM and moment.js.

MongoDB is an ideal choice when it comes to social networks thanks to its ability to quickly process large amounts of data and its flexibility with unstructured data.

<br>

### Brief functionality display:

![Functionality Walk Through](./assets/employee-tracker.gif)

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

`npm init -y`: create a package.json file
<br>
`npm install`: install dependencies

### Dependencies

`npm i express`: back end web application framework for building RESTful APIs
<br>
`npm i moment`: date formatter
<br>
`npm i mongoose`: object-oriented programming library that creates a connection between MongoDB and Node.js

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

## Usage

Run this application with the command:
`node index.js
 `

## License

The application is covered under the following license: [MIT](https://opensource.org/licenses/MIT)

## Contributing

I will not be accepting contributions to this repository at this time.
<br>

## Questions

Questions about this repository? My best point of contact is via [Email](mailto:jayastarrbaldwin@gmail.com)
<br>
If you'd like to view more of my work in GitHub, my profile is: [jayabaldwin](https://github.com/jayabaldwin)
