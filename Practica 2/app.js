// app.js
const mysql = require('mysql2');

console.time('Tiempo de Ejecución en conexión BÁSICA');
// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'farmacia'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la Base de Datos MySQL!');
  
  // Example query
  connection.query('SELECT * FROM medicamento', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });

  // Close the connection
  connection.end();
});


console.timeEnd('Tiempo de Ejecución en conexión BÁSICA');