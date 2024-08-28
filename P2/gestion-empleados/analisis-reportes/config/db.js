const mysql = require('mysql2/promise');  // Usando 'mysql2/promise' para promesas

const pool = mysql.createPool({
    host: 'db',  // Nombre del servicio en Docker Compose
    user: 'admin',
    password: '1234',
    database: 'empleado',
    port: 3306  // Puerto que MySQL está escuchando dentro del contenedor
});

// Prueba de conexión inicial
pool.getConnection()
    .then((connection) => {
        console.log('Conexión a la base de datos MySQL establecida correctamente.');
        connection.release(); // Liberar la conexión de vuelta al pool
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos MySQL:', err.message);
    });

module.exports = pool;  // Exportamos el pool de conexiones



