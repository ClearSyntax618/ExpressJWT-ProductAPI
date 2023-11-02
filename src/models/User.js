import { Sequelize, DataTypes } from "sequelize";
import Role from "./Role.js";

const sequelize = new Sequelize('URI');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        unique: true
    },
})

User.belongsToMany(Role);

export default User;