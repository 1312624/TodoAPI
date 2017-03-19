import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import route from './routes';
import config from './config';

const app = express();

app.use( require('./middlewares/cors') );

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', route);

const dbConnection = config.DBConnection.remote;
mongoose.Promise = global.Promise;

mongoose.connect(dbConnection)
    .then(() => {
        console.log(`\n✅ Database connected to ${dbConnection}`);
        app.listen(config.API_PORT, () => {
            console.log(`\n✅ API is running on http://${config.API_HOST}:${config.API_PORT}\n`);
        });
    })
    .catch(err => console.log(err));
