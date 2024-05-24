const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const route = require('./routes/route.js');
const sequelize = require('../sequelize'); // Import sequelize instance

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

sequelize.sync() // Ensure models are synchronized with the database
    .then(() => console.log('Database synchronized'))
    .catch(err => console.log('Error synchronizing database: ' + err));

app.use('/', route);
console.log("llllllllllllllllll")
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000));
});
