import { Sequelize, DataTypes } from "sequelize";
import {POSTGRES_URI} from '../config/index.js';

const sequelize = new Sequelize(POSTGRES_URI);

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
        unique: true,
        allowNull: false
    },
},
    {
        timestamps: true,
        version: false,
    }
)

export default User;