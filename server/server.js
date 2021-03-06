const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const boredRouter = require('./routes/bored.router');
const activityRouter = require('./routes/activity.router');
const bookmarksRouter = require('./routes/bookmarks.router');
const calendarRouter = require('./routes/calendar.router');
const detailsRouter = require('./routes/details.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/bored', boredRouter);
app.use('/api/activity', activityRouter);
app.use('/api/bookmarks', bookmarksRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/details', detailsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
