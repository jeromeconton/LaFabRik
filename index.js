require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const router = require('./app/router');



const PORT = process.env.PORT || 1234;

const errorHandlers = require('./app/middlewares/handlers/errorHandlers');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./assets'));
// avoir accès a req.body
app.use(express.urlencoded({ extended: true }));



app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: false, // ON EST PAS EN HTTPS
        maxAge: 1000 * 60 * 60 * 24 // session d'une durée max de 24H
    }
}));

app.use((request, response, next) => {
  // transmet les infos de session aux vues
  app.locals.session = request.session;
  next();
});

app.use(router);

app.use('/js', express.static(__dirname + '/app/js'));

// mise en place favicon
const favicon = require('serve-favicon');
const path = require('path');
app.use (favicon(path.join(__dirname + '/favicon.ico')));

// gestion d'erreurs
app.use(errorHandlers.notFound);
app.use(errorHandlers.errorCollector);

app.listen(PORT, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${PORT}`)
});