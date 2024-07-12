// Importamos el módulo os de Node.js
const os = require("os");

// os.arch() devuelve la arquitectura de la CPU del sistema operativo
console.log(os.arch()); // Por ejemplo, puede devolver "x64" en sistemas de 64 bits

// os.cpus() devuelve un arreglo de objetos que proporcionan información sobre cada CPU/core del sistema
console.log(os.cpus()); // Devuelve un arreglo de objetos que representan cada CPU/core del sistema

// os.freemem() devuelve la cantidad de memoria libre en bytes
console.log(os.freemem()); // Por ejemplo, puede devolver 8579155968 (bytes) de memoria libre

// os.hostname() devuelve el nombre del host del sistema
console.log(os.hostname()); // Devuelve el nombre del host del sistema, por ejemplo "DESKTOP-ABC123"
