const mysql = require('mysql2/promise');

console.time('Tiempo de Ejecución en Conexión utilizando PROMESAS');
async function main() {
  try {
    // Connect to the database using promises
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'farmacia'
    });
    
    console.log('Connectado a la Base de datos de MySQL!');
    
    // Execute a query using promise
    const [rows, fields] = await connection.execute('SELECT * FROM medicamento');
    console.log('Resultado de la consulta:', rows);
    
    // Close the connection
    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
console.timeEnd('Tiempo de Ejecución en Conexión utilizando PROMESAS')