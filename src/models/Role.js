import { Sequelize, DataTypes } from "sequelize";
import {POSTGRES_URI} from '../config/index.js';

export const ROLE = ['user', 'admin', 'mod'];

const sequelize = new Sequelize(POSTGRES_URI);

const Role = sequelize.define('Role', {
    // Atributos del modelo se definen aqui
    role: DataTypes.STRING,
});

export default Role;