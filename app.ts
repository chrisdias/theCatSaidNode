import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import hbs from 'hbs';
import session from 'express-session';

import index from './routes/index';

const app: express.Application = express();

// hello!!


// view engine setup
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
   secret: 'secret',
   resave: false,
   saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// res.locals is an object passed to hbs engine
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
   res.locals.session = req.session;
   next();
});

app.use('/', index);

// 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
   var err = new Error('Not Found') as Error & { status?: number };
   err.status = 404;
   next(err);
});

// error handler
app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};
   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

export default app;
