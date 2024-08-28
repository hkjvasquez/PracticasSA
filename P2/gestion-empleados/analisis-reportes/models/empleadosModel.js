const connection = require('../config/db');

const actualizarPuesto = async (id) => {
  try {
    const [results] = await connection.query('DELETE FROM  reportes  WHERE empleado_id = ?', [id]);
    return results;
  } catch (err) {
    throw err;
  }
};

module.exports = { actualizarPuesto };

