const express = require('express');
const app = express();
const config = require('./db');
const mongoose = require('mongoose');
const PORT = 4000;
const BodyParser = require('body-parser');
const cors = require('cors');
mongoose.promise = global.Promise;

mongoose.connect(config.db, {userNewUrlParser: true}).then(
    () => {console.log('Database is connected')},
    err => {console.log('Unable to connect to database')}
    );
app.use(cors());
app.use(BodyParser.json());
app.listen(PORT, function () {
   console.log('Server is running')
});

const userRoute = require('./Routes/userRoute');
app.use('/user', userRoute);
