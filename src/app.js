import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "./config/index.js";

import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// Conexion a la DB
const sequelize = new Sequelize(POSTGRES_URI);
try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully") 
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Rutas
import indexRoutes from "./routes/index.routes.js";
import userRoutes from './routes/user.routes.js';

const app = express();

// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);


// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rutas
app.use("/api", indexRoutes);
app.use("/api/users", userRoutes);


export default app;