// Importamos el módulo path de Node.js
const path = require("path");

// Definimos la ruta del archivo
const filePath = "/Users/johndoe/Documents/example.txt";

// Utilizamos el método `path.dirname()` para obtener el directorio de la ruta
console.log(path.dirname(filePath)); // Salida: /Users/johndoe/Documents

// Utilizamos el método `path.basename()` para obtener el nombre del archivo de la ruta
console.log(path.basename(filePath)); // Salida: example.txt

// Utilizamos el método `path.extname()` para obtener la extensión del archivo de la ruta
console.log(path.extname(filePath)); // Salida: .txt
