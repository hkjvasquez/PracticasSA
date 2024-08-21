const db = require('../config/db');  // Importa la conexión desde db.js

const empleadosModel = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM empleados');
            console.log('Consulta exitosa:', rows);  // Log para el caso de éxito
            return rows;
        } catch (error) {
            console.error('Error en la consulta:', error);  // Log para el caso de error
            throw error;
        }
    },
    // Otros métodos del modelo...
};

module.exports = empleadosModel;
