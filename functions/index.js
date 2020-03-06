const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "saludo". */
exports.Excelentejuego = functions.https.onRequest(
    /** Código para la función saludo.
     * @param {{query:Object}} request solicitud que recibe el servidor.
     * Corresponde a la librería Express.
     * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
     * servidor. Corresponde a la librería Express. */
    (request, response) => {
      try {
        // verifica que el parámetro nombre1 recibido del navegador esté correcto.
        if (!request.query.letra1) {
          // Entra aquí si el nombre1 es null, undefined o ""
          throw new Error("Error --- Falta el nombre nombre del juego ");
        } else if (!request.query.letra2) {
          // Entra aquí si el nombre2 es null, undefined o ""
          throw new Error("Error --- Falta el nombre de la consola");
        }
        /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
         * Devuelve un saludo. */
        response.send(
          `Excelente Juego ${request.query.letra1} muy buena consola ${request.query.letra2}`);
      } catch (e) {
        // Devuelve un texto de error.
        response.send(e.message);
      }
    });
