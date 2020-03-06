const functions = require('firebase-functions');

exports.excelentejuego = functions.https.onRequest(
    /** 
     * @param {{query:Object}} 
     * 
     * @param {{send:(texto:string)=>void}}  
     */
    (request, response) => {
      try {
        
        if (!request.query.letra1) {
           
          throw new Error("Error --- Falta el nombre nombre del juego ");

        } else if (!request.query.letra2) {
          
          throw new Error("Error --- Falta el nombre de la consola");
        }
        
        response.send(
          `Excelente Juego ${request.query.letra1} , muy buena consola ${request.query.letra2}`);
      } catch (e) {
        
        response.send(e.message);
      }
    });
