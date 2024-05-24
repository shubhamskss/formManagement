const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../sequelize'); 


const Form = sequelize.define('Form', {
    uniqueID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // to Generate a UUID for each entry
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true 
        }
    },
    isGraduate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
    }
});



module.exports = Form; // Export the Form model for use in other modules
