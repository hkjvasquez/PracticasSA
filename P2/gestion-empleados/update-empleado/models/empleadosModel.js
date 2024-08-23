const connection = require('../config/db');

const actualizarPuesto = async (id, puesto) => {
  try {
    const [results] = await connection.query('UPDATE empleados SET puesto = ? WHERE id = ?', [puesto, id]);
    return results;
  } catch (err) {
    throw err;
  }
};

module.exports = { actualizarPuesto };
