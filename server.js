// Importamos el módulo http integrado de Node.js
const http = require("http");

// Creamos un servidor HTTP utilizando http.createServer()
const server = http.createServer((req, res) => {
  // Este callback se ejecuta cada vez que el servidor recibe una solicitud (req) y debe enviar una respuesta (res)

  // Establecemos el código de estado de la respuesta HTTP a 200 (OK)
  // y configuramos el tipo de contenido como texto plano
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Enviamos la respuesta al cliente con el contenido "Hello, World!"
  res.end("Hello, World!");
});

// Hacemos que el servidor escuche las solicitudes en el puerto 3000 y la dirección IP ""
server.listen(3000, () => {
  // Este callback se ejecuta cuando el servidor comienza a escuchar las solicitudes entrantes
  console.log("Server running at http://localhost:3000/");
});
