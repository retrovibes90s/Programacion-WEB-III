const mysql = require('mysql2');
console.time('Tiempo de Ejecución en Conexión por AGRUPAMIENTO');
// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'farmacia',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Query the database using a pooled connection
pool.query('SELECT * FROM medicamento', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});
console.timeEnd('Tiempo de Ejecución en Conexión por AGRUPAMIENTO')