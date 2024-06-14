// const swaggerAutogen = require('swagger-autogen')();

// const doc = {
  
//   info: {
//     title: 'PIII',
//     description: 'Aplicacion inicial de backend',
//   },
//    host: 'localhost:3000'
// };

// const outputFile = '../../swagger-output.json';
// const routes = [
  

//   "src/modules/user/user.routes.js",
// ];

// swaggerAutogen(outputFile, routes, doc);

//modificacion chat 4.o - verificar -
// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
// const express = require('express');
// const app = express();

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'PIII',
//       description: 'Aplicacion inicial de backend',
//       version: '1.0.0',
//     },
//     definitions: {
//       User: {
//         type: "object",
//         required: ["firstname", "lastname", "email", "rol"],
//         properties: {
//           firstname: { type: "string" },
//           lastname: { type: "string" },
//           email: { type: "string" },
//           domicilio: { type: "string" },
//           celular: { type: "string" },
//           documento: { type: "string" },
//           rol: { type: "string", enum: ["Task", "Gammer", "Client", "Provider"] },
//           area: { type: "string" },
//         },
//       },
//     },
//   },
//   apis: ['src/modules/user/user.routes.js'], // Ruta a tus archivos de rutas
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// module.exports = app;


const swaggerAutogen = require('swagger-autogen')();
const express = require('express');
const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'PIII',
      description: 'Aplicacion inicial de backend',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    definitions: {
      User: {
        type: "object",
        required: ["firstname", "lastname", "email", "rol"],
        properties: {
          firstname: { type: "string" },
          lastname: { type: "string" },
          email: { type: "string" },
          domicilio: { type: "string" },
          celular: { type: "string" },
          documento: { type: "string" },
          rol: { type: "string", enum: ["Task", "Gammer", "Client", "Provider"] },
          area: { type: "string" },
        },
      },
    },
  },
  apis: ['src/modules/user/user.routes.js'], // Ruta a tus archivos de rutas
};

const outputFile = '../../swagger-output.json';

// Generar la documentación
swaggerAutogen(outputFile, [], swaggerOptions);

module.exports = app;
