// Importamos el módulo fs (file system) de Node.js
const fs = require("fs");

// Utilizamos el método `readFile` del módulo fs para leer el contenido de un archivo
// El primer argumento es el nombre del archivo que queremos leer, en este caso "require-example.js"
// El segundo argumento es la codificación del archivo, en este caso "utf8" para leer el archivo como texto
// El tercer argumento es una función de callback que se ejecutará cuando la lectura del archivo haya sido completada
fs.readFile("require-example.js", "utf8", (err, data) => {
  // Esta función de callback maneja cualquier error que pueda ocurrir durante la lectura del archivo
  if (err) {
    console.error(err); // Si hay un error, lo imprimimos en la consola de errores
    return; // Terminamos la ejecución de la función callback
  }

  // Si la lectura del archivo es exitosa, `data` contendrá el contenido del archivo
  console.log(data); // Imprimimos el contenido del archivo en la consola
});
