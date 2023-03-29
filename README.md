## Final Product - Natter

## Project Overview

What is Natter?
Natter is a chat application that encourages users to make new connections. The word originates from Britain and simply means to chat. Chat about what? Well, anything you like. You’re just having a natter. The features implemented in Natter promote positive mental health and our user-friendly and welcoming concept is particularly aimed at those who may suffer from social anxiety or experince social isolation; we want people to feel safe and comfortable making new connections using Natter which is why we chose to implement these features. As it says on our Landing Page: “Good mental health starts with a good natter!" Simply enter your name, click and you’re ready to natter.

## Landing Page:

- Designed with Bootstrap and CSS
- A unique user name must be entered to join the chat
- Natter logo and video of people having a good natter with mental health messages

<p align="center">
  <img src="pic1">
</p>
<p align="center">
  <img src="pic1">
</p>

## Main Chat Page

- Send messages back and forth on split screen in real time using socket.io. The sender shows up on the opposite side.
<p align="center">
  <img src="pic3">
</p>

- Send messages to our CHAT GPT AI
<p align="center">
  <img src="pic4">
</p>

- Toaster alert: emits the first message to the client who’s logged on /broadcasts messages to all users when someone new connects and send Mental Health 'take-breaks' messages to the user.
<p align="center">
  <img src="pic5">
</p>

- Groups on the left side of page with scroll bar. Chat with people with similar interests
Search bar for groups
  <p align="center">
  <img src="pic6">
</p>

- Last 20 messages stored in Database to make Axios request for the last twenty messages / tracks and updates continuously so always up to date in real-time.

- Swear word detection blocks profanity with asterixes, creating a safe space for all

- Mental Health Break timer scheduled in real-time using Scheduler - Toaster message every hour

- Scroll bar automatically views the currrent message

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Morgan](https://github.com/expressjs/morgan#readme)
- [Node-schedule](https://github.com/node-schedule/node-schedule#readme)
- [PG](https://node-postgres.com/)
- [React-toastify](https://www.npmjs.com/package/react-toastify)
- [Socket.io](https://socket.io/)
- [Bad-words](https://www.npmjs.com/package/bad-words)
- [ChatGPT](https://platform.openai.com/)
- [Nodemon](https://nodemon.io/)

## Database

The PostgreSQL

## Getting Started

You are going to need to run a client and server simultaneously in your terminal window.

**Prerequisites:**

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) 10.x or more
- [psql](https://www.postgresql.org/docs/current/app-psql.html)

**Server:**

1. Connect to your postgres server

```sh
$ psql -U vagrant -d template1
```

2. Create the necessary objects in the Database

```sh
$ CREATE ROLE labber WITH LOGIN password 'labber';
$ CREATE DATABASE midterm OWNER labber;
```

3. Create a folder and clone this repository

```sh
$ git clone https://github.com/tienviet10/Food-Pickup.git
```

4. Move to the correct directory

```sh
$ cd <name-given-to-cloned-repository>
```

5. Install dependencies

```sh
$ npm install
```

6. Create a .env file according to the template below

```sh

PORT=8080
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_PORT=
OPENAI_KEY=
API=
```

7. Reset the database

```sh
$ npm run db:reset
```

8. Run the Express web server

```sh
$ npm run dev
```

## Deployment

- Click here to see a woking deployment of our site<a href="https://ornate-scone-630cb8.netlify.app/">Natter</a>
- Back-end server and PostgresSQL Database hosted by <a href="https://railway.app/">Railway</a>
- Client side React application hosted by <a href="https://www.netlify.com/">Netlify</a>

## Authors

- <a href="https://github.com/Cyber-Sam33">Sammi Issa</a>
- <a href="https://github.com/knoori-code">Khalid Noori</a>

## Acknowledgement

- Home page and restaurant page was created based on a template designed by <a href="https://htmlcodex.com">HTML Codex</a> and distributed by <a href="https://themewagon.com">ThemeWagon</a>.
- Login page and registration page were created based on a template designed by <a href="https://colorlib.com/wp/template/colorlib-regform-8/">Rok Krivec</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
