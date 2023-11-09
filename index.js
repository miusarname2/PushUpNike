import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import { validarToken,crearToken } from "./controller/helpers/jwt.controller.js";
import { ventas } from "./view/routes/ventas.routes.js";
import { empleados } from "./view/routes/empleados.routes.js";
import { Products } from "./view/routes/products.routes.js";
import { Providers } from "./view/routes/proveedores.routes.js";
import { Clientes } from "./view/routes/clients.routes.js";
import morgan from 'morgan';
import cors from 'cors';

// Environment variables
dotenv.config();

// Initialize server
const index = express();

// Setting
index.set('port', process.env.PORT || 3000);

// Middlewares
index.use(morgan('dev'));
index.use(cors());
index.use(express.json());

// Routes 
index.use('/token',crearToken)
index.use('/sells',validarToken,ventas)
index.use('/employees',validarToken,empleados)
index.use('/products',validarToken,Products)
index.use('/proveedores',validarToken,Providers)
index.use('/clients',validarToken,Clientes)

// Server
index.listen(index.get('port'), () => {
  console.log('Server on port ' + index.get('port'));
});

