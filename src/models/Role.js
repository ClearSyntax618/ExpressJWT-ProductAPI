import { Sequelize, DataTypes } from "sequelize";
import User from "./User.js";

export const ROLE = ['user', 'admin', 'mod'];

const sequelize = new Sequelize('URI');

const Role = sequelize.define('Role', {
    // Atributos del modelo se definen aqui
    role: DataTypes.STRING,
});


Role.belongsToMany(User);

export default Role;