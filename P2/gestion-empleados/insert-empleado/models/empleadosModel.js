const db = require('../config/db'); // Importa la conexión desde db.js

const empleadosModel = {
   
    insert: async (nombre, puesto) => {
        try {
            const [result] = await db.query('INSERT INTO empleados (nombre, puesto) VALUES (?, ?)', [nombre, puesto]);
            console.log('Empleado insertado con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error al insertar empleado:', error);
            throw error;
        }
    }

};






module.exports = empleadosModel;  // Asegúrate de exportar correctamente el objeto
