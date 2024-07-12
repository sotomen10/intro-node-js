// Importamos el módulo Axios, que es una librería para hacer peticiones HTTP desde Node.js
const axios = require("axios");

// Realizamos una petición GET a la URL proporcionada
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Si la petición es exitosa, el servidor devuelve una respuesta y la imprimimos en la consola
    console.log(response.data);
  })
  .catch((error) => {
    // Si hay algún error en la petición, lo capturamos y lo imprimimos en la consola
    console.error(error);
  });
