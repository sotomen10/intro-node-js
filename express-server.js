// Importamos el módulo Express
const express = require("express");

// Creamos una instancia de la aplicación Express
const app = express();

// Definimos el puerto en el que queremos que el servidor escuche las solicitudes
const PORT = 3000;

// Definimos una ruta para manejar las solicitudes GET a la raíz del servidor ("/")
app.get("/", (req, res) => {
  // Esta función se ejecuta cada vez que se recibe una solicitud GET a "/"
  // Enviamos la respuesta "Hello from Express!" al cliente
  res.send("Hello from Express!");
});

// Hacemos que la aplicación Express escuche las solicitudes en el puerto especificado
app.listen(PORT, () => {
  // Esta función se ejecuta cuando el servidor comienza a escuchar las solicitudes entrantes
  console.log(`Server running at http://localhost:${PORT}/`);
});
