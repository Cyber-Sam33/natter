const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const io = new Server(server, {
  cors:  {
    origin: 'http://localhost:3000',
    method: ['GET', "POST"]
  }
})

const server = http.createServer(app);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`)
  })
})

module.exports = app;
