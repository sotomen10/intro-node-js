// Importamos el módulo fs (file system) de Node.js
const fs = require("fs");

// Utilizamos el método `writeFile` del módulo fs para escribir en un archivo
// El primer argumento es el nombre del archivo en el que queremos escribir, en este caso "example.txt"
// El segundo argumento es el contenido que queremos escribir en el archivo, en este caso "Hello, World!"
// El tercer argumento es una función de callback que se ejecutará después de que se haya completado la escritura en el archivo
fs.writeFile("example.txt", "Hello, World!", (err) => {
  // Esta función de callback maneja cualquier error que pueda ocurrir durante la escritura en el archivo
  if (err) {
    console.error(err); // Si hay un error, lo imprimimos en la consola de errores
    return; // Terminamos la ejecución de la función callback
  }

  // Si la escritura en el archivo es exitosa, simplemente imprimimos un mensaje de éxito en la consola
  console.log("File written successfully");
});
