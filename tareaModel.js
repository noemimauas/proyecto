const { DataTypes } = require('sequelize');
const { sequelize } = require('./database.js');

const Tarea = sequelize.define('Tarea', {
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
    tableName: 'tareas',
});

module.exports = Tarea;