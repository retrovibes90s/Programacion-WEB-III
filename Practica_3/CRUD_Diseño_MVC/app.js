const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path") // Path 

const session = require('express-session');
app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false})); 

const flash = require('express-flash'); 
app.use(flash());

// EJS template engine 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Puerto 
const port = process.env.PORT || 3000;

// Peticiones de tipo application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Peticiones de tipo application/json
app.use(bodyParser.json())

// Bootstrap 5 (CSS y JS) 
app.use("/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use("/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))

// Rutas Front 
app.get('/', (req,res) => {
  var message = req.flash('message');  
  res.render('index', {
    data: message, // Mensaje para cada tarea realizada 
  })
})
app.get('/crear', (req,res) => {  
  res.render('crear')
})
app.get('/leer', (req,res) => {  
  res.render('leer')
})
app.get('/actualizar', (req,res) => {  
  res.render('actualizar')
})

// Ruta Productos 
const ruta_productos = require('./routes/productos');
const con = require('./config/db');

// Usamos un Middleware 
app.use('/api/v1/productos', ruta_productos)

// Directorio de las imágenes 
app.use("/uploads",express.static(path.join(__dirname, "uploads")))

// Escuchamos las peticiones en el puerto establecido 
app.listen(port, () => {
  console.log(`La Aplicación está funcionando en el puerto ${port}`);
});