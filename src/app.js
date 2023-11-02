import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// Rutas
import indexRoutes from "./routes/index.routes.js";

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

export default app;