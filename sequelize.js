const { Sequelize } = require('sequelize');

const newConnection = new Sequelize('skspractice', 'root', 'your_new_password', {
    host: 'localhost',
    dialect: 'mysql'
});

newConnection.authenticate()
    .then(() => console.log('New database connected'))
    .catch(err => console.error('Error connecting to new database:', err));

module.exports = newConnection;
